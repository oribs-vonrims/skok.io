/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import WebmentionTypeCount from "./WebmentionTypeCount"
// import LikeIcon from "../../icons/like.inline.svg"
// import CommentIcon from "../../icons/comment.inline.svg"
// import RepostIcon from "../../icons/repost.inline.svg"

const WebmentionTypeCounts = ({
  likeCount,
  likeSingular,
  likePlural,
  commentCount,
  commentSingular,
  commentPlural,
  repostCount,
  repostSingular,
  repostPlural,
}) => (
  <Flex
    sx={{
      marginBottom: 4,
    }}
  >
    {Boolean(commentCount) && (
      <WebmentionTypeCount
        count={commentCount}
        singular={commentSingular}
        plural={commentPlural}
        // icon={commentIcon}
      />
    )}
    {` `}
    {Boolean(repostCount) && (
      <WebmentionTypeCount
        count={repostCount}
        singular={repostSingular}
        plural={repostPlural}
        // icon={repostIcon}
      />
    )}
    {` `}
    {Boolean(likeCount) && (
      <WebmentionTypeCount
        count={likeCount}
        singular={likeSingular}
        plural={likePlural}
        // icon={likeIcon}
      />
    )}
  </Flex>
)

export default WebmentionTypeCounts
