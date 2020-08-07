/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"

const CommentCount = () => <>X comments</>
const LikeCount = () => <>X likes</>

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

const WebMentions = ({ allWebmentionEntry }) => {
  // get all likes
  // get all comments
  // https://mxb.dev/blog/the-whimsical-web/#webmentions

  const { edges } = allWebmentionEntry

  const likes = edges.filter(({ likeOf }) => likeOf !== null).length
  const comments = edges.filter(
    ({ repostOf, mentionOf, inReplyTo, content }) => {
      return (
        (repostOf !== null || mentionOf !== null || inReplyTo !== null) &&
        content?.text !== null
      )
    }
  ).length

  return (
    <div>
      <b>WebMentions</b>
    </div>
  )
}

export default WebMentions
