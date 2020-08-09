/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import WebmentionTypeCounts from "./WebmentionTypeCounts"
import Comment from "../Comment"
import normalizeTweet from "./normalize-tweet"

const WebMentions = ({ allWebmentionEntry: { edges }, tweet }) => {
  const mentionsByType = (edges, type) =>
    edges.filter(entry => entry.node[type] !== null)
  const getFlatEntry = entry => entry.map(({ node }) => node)

  const likes = getFlatEntry(mentionsByType(edges, `likeOf`))
  const reposts = getFlatEntry(mentionsByType(edges, `repostOf`))
  // Combine mentions and replies together
  const replies = [
    ...getFlatEntry(mentionsByType(edges, `inReplyTo`)),
    ...getFlatEntry(mentionsByType(edges, `mentionOf`)),
  ]

  const likeCount = likes.length
  const repostCount = reposts.length
  const replyCount = replies.length

  const testReplies = [
    {
      wmTarget: "https://skok.club/blog/fira-code/",
      wmSource:
        "https://brid-gy.appspot.com/comment/twitter/iamskok/1290433014418169856/1290434471234158592",
      wmProperty: "in-reply-to",
      wmId: 835651,
      type: "entry",
      url: "https://twitter.com/CPA_SanDiego/status/1290434471234158592",
      likeOf: null,
      author: {
        url: "https://twitter.com/CPA_SanDiego",
        type: "card",
        photo:
          "https://webmention.io/avatar/pbs.twimg.com/c434c401870c45b0f433d45860efed0c04adf74e3b8cb15c4cb1c139bf25916a.jpg",
        name: "San Diego CPA",
      },
      content: {
        text:
          "Lorem, ipsum #hashtag #hash_tag234 google.com https://google.com @twitterHandle @iamskok dolor sit amet consectetur adipisicing elit. Voluptatum nemo perferendis accusamus dolorem similique reiciendis, laudantium vel! Soluta autem pariatur, nobis fugit et ducimus maxime, aut rem placeat illum quo.",
      },
    },
  ]

  return (
    <aside>
      <Styled.h4>Webmentions</Styled.h4>

      <WebmentionTypeCounts
        tweet={tweet}
        likeCount={likeCount}
        likeSingular="like"
        likePlural="likes"
        repostCount={repostCount}
        repostSingular="repost"
        repostPlural="reposts"
        replyCount={replyCount}
        replySingular="reply"
        replyPlural="replies"
      />

      {testReplies &&
        testReplies.map(
          ({ author: { name, photo }, content: { text }, url, published }) => {
            return (
              <Comment
                key={url}
                to={url}
                src={photo}
                name={name}
                text={normalizeTweet(text)}
                published={published}
              />
            )
          }
        )}
    </aside>
  )
}

export default WebMentions
