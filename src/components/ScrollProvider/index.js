import React, { createContext, useReducer, useEffect } from "react"
import throttle from "lodash.throttle"
import useIsMounted from "../../hooks/useIsMounted"
import { SCROLL_PROVIDER_THROTTLE_DEPLAY } from "../../utils/constants"
import handleActiveHeaderId from "./handleActiveHeaderId"
import handleProgress from "./handleProgress"

const reducer = (state, { type, payload }) => {
  switch (type) {
    case `SET_HEADER_IDS`:
      return {
        ...state,
        ids: [...payload.ids],
      }
    case `SET_ACTIVE_HEADER_ID`:
      return {
        ...state,
        activeId: payload.activeId,
      }
    case `SHOW_TABLE_OF_CONTENTS`:
      return {
        ...state,
        isVisible: payload.isVisible,
      }
    case `SET_SCROLL_PROGRESS`:
      return {
        ...state,
        scrollProgress: payload.scrollProgress,
      }
  }
}

const initialState = {
  ids: [],
  activeId: null,
  isVisible: false,
  scrollProgress: null,
}

const ScrollContext = createContext()

const ScrollProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const isMounted = useIsMounted()

  const { ids, isVisible } = state

  useEffect(() => {
    dispatch({
      type: `SET_ACTIVE_HEADER_ID`,
      payload: {
        activeId: ids[0],
      },
    })
  }, [ids])

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (isMounted) {
        handleProgress({
          elementId: `header`,
          dispatch,
        })

        if (isVisible) {
          handleActiveHeaderId({
            ids,
            dispatch,
          })
        }
      }
    }, SCROLL_PROVIDER_THROTTLE_DEPLAY)

    window.addEventListener(`scroll`, handleScroll)

    return () => window.removeEventListener(`scroll`, handleScroll)
  }, [ids, isVisible, isMounted])

  return (
    <ScrollContext.Provider value={[state, dispatch]}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext, ScrollProvider }
