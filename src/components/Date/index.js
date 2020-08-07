/** @jsx jsx */
import { jsx } from "theme-ui"
// import { format, formatISO } from "date-fns"

const Date = ({ date }) => {
  return (
    <time
      className="dt-published"
      dateTime={date} // Convert to `2013-06-13 12:00:00` format
    >
      {date}
    </time>
  )
}

export default Date
