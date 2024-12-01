import React from 'react'
import '../styles/general.css'
import { Link } from 'react-router-dom'
const General = (props) => {
  return (
    <div className='container'>
      <div className="content">
        <h2>{props.heading}</h2>
        <p>{props.para}</p>
        <button><Link to={props.link}>{props.btn}</Link></button>
      </div>
      <img src={props.img} alt="" />
    </div>
  )
}

export default General
