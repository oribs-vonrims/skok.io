/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import PostDate from "../PostDate"
import HitCounter from "../HitCounter"

const PostMeta = ({ date, slug }) => {
  return (
    <Flex
      sx={{
        justifyContent: `space-between`,
        lineHeight: 0,
        marginBottom: 4,
      }}
    >
      <PostDate date={date} />
      <HitCounter slug={slug} />
    </Flex>
  )
}

export default PostMeta
