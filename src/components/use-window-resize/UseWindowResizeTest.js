import React from 'react'
import useWindowResizeHook from './useWindowResizeHook'

const UseWindowResizeTest = () => {
    const windowSize = useWindowResizeHook()
    const {width, height} = windowSize
  return (

    <div><h1>Use Window Resize Hook</h1>
    <p>width is {width}</p>
    <p>Heigth is {height}</p></div>
  )
}

export default UseWindowResizeTest