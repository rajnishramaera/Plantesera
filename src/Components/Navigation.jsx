import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import "./HeaderTwo.css"
const Navigation = () => {
  const dispatch = useDispatch()

  const changeColor = () => {
    dispatch(changeColor("#FF4F4F"))
  }
  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  // const  [show2,setShow2] = useState(false)

  const handleClick1 = (event) => {
    setShow1(true),
      setShow2(false),
      setShow3(false),
      setShow4(false),
      setShow5(false)
  }
  const handleClick2 = () => {
    setShow1(false)
    setShow2(true)
    setShow3(false)
    setShow4(false)
    setShow5(false)
  }

  const handleClick3 = () => {
    setShow1(false)
    setShow2(false)
    setShow3(true)
    setShow4(false)
    setShow5(false)
  }

  const handleClick4 = () => {
    setShow1(false)
    setShow2(false)
    setShow3(false)
    setShow4(true)
    setShow5(false)
  }

  const handleClick5 = () => {
    setShow1(false)
    setShow2(false)
    setShow3(false)
    setShow4(false)
    setShow5(true)
  }

  return (
    <ul
      id="navigation"
      className="hidden md:flex space-x-6 lg:float-right text-white rounded-3xl px-20"
    >
      <li className={show1 ? "active-11" : ""} onClick={handleClick1}>
        <Link to="/" onClick={() => changeColor()}>
          Home
        </Link>
      </li>
      <li className={show2 ? "active-11" : ""} onClick={handleClick2}>
        <Link to="/products">Our Products</Link>
      </li>
      <li className={show3 ? "active-11" : ""} onClick={handleClick3}>
        <Link to="/privacypolicy">About Us</Link>
      </li>

      <li className={show4 ? "active-11" : ""} onClick={handleClick4}>
        <a href="#" className="mr-1">
          Contact Us
        </a>
      </li>
    </ul>
  )
}

export default Navigation
