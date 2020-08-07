/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import WebmentionTypeCounts from "./WebmentionTypeCounts"

const CommentCount = ({ count }) => (
  <>
    {count} {count === 1 ? `comment` : `comments`}
  </>
)

const RepostCount = ({ count }) => (
  <>
    {count} {count === 1 ? `repost` : `reposts`}
  </>
)

const LikeCount = ({ count }) => (
  <>
    {count} {count === 1 ? `like` : `likes`}
  </>
)

// 1. Comments
// repost-of + !null content
// mention-of
// in-reply-to
// 2. Likes
// likeOf
const Comment = () => (
  <>
    <span>url</span>
    <span>published</span>
    <span>author.name</span>
    <span>author.photo</span>
    <span>author.url</span>
    <span>content.text</span>
  </>
)

const WebMentions = ({ allWebmentionEntry: { edges } }) => {
  const mentionsByType = (edges, type) =>
    edges.filter(entry => entry.node[type] !== null)
  const getFlatEntry = entry => entry.map(({ node }) => node)

  const likes = getFlatEntry(mentionsByType(edges, `likeOf`))
  // Reply on a tweet URL which contains your website URL
  const mentions = getFlatEntry(mentionsByType(edges, `mentionOf`))
  const replies = getFlatEntry(mentionsByType(edges, `inReplyTo`))
  const reposts = getFlatEntry(mentionsByType(edges, `repostOf`))

  const comments = [...mentions, ...replies]

  const likeCount = likes.length
  const commentCount = comments.length
  const repostCount = reposts.length

  return (
    <div>
      <b>WebMentions section</b>
      <br />
      {/* {Boolean(likeCount) && <LikeCount count={likeCount} />}
      {` `}
      {Boolean(commentCount) && <CommentCount count={commentCount} />}
      {` `}
      {Boolean(repostCount) && <RepostCount count={repostCount} />} */}

      <WebmentionTypeCounts
        likeCount={likeCount}
        likeSingular="like"
        likePlural="likes"
        commentCount={commentCount}
        commentSingular="comment"
        commentPlural="comments"
        repostCount={repostCount}
        repostSingular="repost"
        repostPlural="reposts"
      />

      {comments.map(({ author: { name, photo }, content: { text }, url }) => {
        return (
          <div key={url}>
            <a href={url} rel="noopener noreferrer" target="_blank">
              <img src={photo} alt={`${name} twitter avatar`} />

              <p>{name}</p>
            </a>

            <p>{text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default WebMentions
