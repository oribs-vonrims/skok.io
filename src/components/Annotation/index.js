/** @jsx jsx */
import { useState, useContext, useEffect } from "react"
import { jsx, useThemeUI } from "theme-ui"
import { RoughNotation } from "react-rough-notation"
import { useInView } from "react-intersection-observer"
import { FontLoadContext } from "../../components/FontLoadProvider"

const inViewOptions = {
  threshold: 0.1,
}

const RoughNotationOptions = {
  animationDelay: 200,
  animationDuration: 1200,
}

// Underline,
// Box,
// Circle,
// Highlight,
// StrikeThrough,
// CrossedOff,
// BracketsX
// BracketsY

const Notation = ({
  threshold = 0.1,
  children,
  type = `underline`,
  multiline = true,
  iterations = 2,
  strokeWidth = 1,
  padding = [5, 5, 5, 5],
  brackets = null,
  animate = true,
  animationDelay = 200,
  animationDuration = 1200,
  rtl = false,
  color = null,
  ...rest
}) => {
  const isLoaded = useContext(FontLoadContext)
  const { ref, inView } = useInView({ threshold })
  const [show, setShow] = useState()
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()

  useEffect(() => {
    setShow(isLoaded && inView)
  }, [inView, isLoaded])

  return (
    <span ref={ref}>
      <RoughNotation
        type={type}
        multiline={multiline}
        iterations={iterations}
        strokeWidth={strokeWidth}
        padding={padding}
        brackets={brackets}
        animate={animate}
        animationDelay={animationDelay}
        animationDuration={animationDuration}
        rtl={rtl}
        color={color ? color : primary}
        show={show}
        {...rest}
      >
        {children}
      </RoughNotation>
    </span>
  )
}

const Underline = props => {
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()
  const { ref, inView } = useInView(inViewOptions)
  const [show, setShow] = useState()

  useEffect(() => {
    Promise.all(
      fontFaces.map(({ font, style }) =>
        new FontFaceObserver(font, { style }).load()
      )
    ).then(() => setShow(inView))
  }, [inView])

  return (
    <span ref={ref}>
      <RoughNotation
        type="underline"
        show={show}
        color={primary}
        multiline={true}
        iterations={5}
        {...RoughNotationOptions}
        {...props}
      />
    </span>
  )
}

const Box = props => {
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()
  const { ref, inView } = useInView(inViewOptions)
  const [show, setShow] = useState()

  useEffect(() => {
    Promise.all(
      fontFaces.map(({ font, style }) =>
        new FontFaceObserver(font, { style }).load()
      )
    ).then(() => setShow(inView))
  }, [inView])

  return (
    <span ref={ref}>
      <RoughNotation
        type="box"
        show={show}
        color={primary}
        iterations={3}
        {...RoughNotationOptions}
        {...props}
      />
    </span>
  )
}

const Circle = props => {
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()
  const isLoaded = useContext(FontLoadContext)
  const { ref, inView } = useInView(inViewOptions)
  const [show, setShow] = useState()

  useEffect(() => {
    setShow(isLoaded && inView)
  }, [inView, isLoaded])

  return (
    <span ref={ref}>
      <RoughNotation
        type="circle"
        show={show}
        color={primary}
        iterations={5}
        {...RoughNotationOptions}
        {...props}
      />
    </span>
  )
}

const Highlight = props => {
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()
  const isLoaded = useContext(FontLoadContext)
  const { ref, inView } = useInView(inViewOptions)
  const [show, setShow] = useState()

  useEffect(() => {
    setShow(isLoaded && inView)
  }, [inView, isLoaded])

  return (
    <span ref={ref}>
      <RoughNotation
        type="highlight"
        show={show}
        color={primary}
        multiline={true}
        {...RoughNotationOptions}
        {...props}
      />
    </span>
  )
}

const StrikeThrough = props => {
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()
  const isLoaded = useContext(FontLoadContext)
  const { ref, inView } = useInView(inViewOptions)
  const [show, setShow] = useState()

  useEffect(() => {
    setShow(isLoaded && inView)
  }, [inView, isLoaded])

  return (
    <span ref={ref}>
      <RoughNotation
        type="strike-through"
        show={show}
        color={primary}
        iterations={5}
        {...RoughNotationOptions}
        {...props}
      />
    </span>
  )
}

const CrossedOff = props => {
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()
  const isLoaded = useContext(FontLoadContext)
  const { ref, inView } = useInView(inViewOptions)
  const [show, setShow] = useState()

  useEffect(() => {
    setShow(isLoaded && inView)
  }, [inView, isLoaded])

  return (
    <span ref={ref}>
      <RoughNotation
        type="crossed-off"
        show={show}
        color={primary}
        iterations={5}
        {...RoughNotationOptions}
        {...props}
      />
    </span>
  )
}

const BracketsX = props => {
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()
  const isLoaded = useContext(FontLoadContext)
  const { ref, inView } = useInView(inViewOptions)
  const [show, setShow] = useState()

  useEffect(() => {
    setShow(isLoaded && inView)
  }, [inView, isLoaded])

  return (
    <span ref={ref}>
      <RoughNotation
        type="bracket"
        show={show}
        color={primary}
        strokeWidth={3}
        brackets={["right", "left"]}
        {...RoughNotationOptions}
        {...props}
      />
    </span>
  )
}

const BracketsY = props => {
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()
  const isLoaded = useContext(FontLoadContext)
  const { ref, inView } = useInView(inViewOptions)
  const [show, setShow] = useState()

  useEffect(() => {
    setShow(isLoaded && inView)
  }, [inView, isLoaded])

  return (
    <span ref={ref}>
      <RoughNotation
        type="bracket"
        show={show}
        color={primary}
        strokeWidth={3}
        brackets={["bottom", "top"]}
        {...RoughNotationOptions}
        {...props}
      />
    </span>
  )
}

export {
  Underline,
  Box,
  Circle,
  Highlight,
  StrikeThrough,
  CrossedOff,
  BracketsX,
  BracketsY,
}
