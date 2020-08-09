/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import WebmentionTypeCounts from "./WebmentionTypeCounts"
import Comment from "../Comment"

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

      {replies.map(
        ({ author: { name, photo }, content: { text }, url, published }) => {
          return (
            <Comment
              key={url}
              to={url}
              src={photo}
              name={name}
              text={text}
              published={published}
            />
          )
        }
      )}
    </aside>
  )
}

export default WebMentions
