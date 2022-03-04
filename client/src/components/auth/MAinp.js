import React, { Fragment, useState } from 'react'
import "../css/content.css"
const MAIN = ({}) => { 
    return (
        <Fragment>
       
		
			<header classname = "header" style={{display:"flex", justifyContent:"center"}}>
			<nav    classname = "navbar">
			<ul     classname = "nav-menu">
				<li     classname = "nav-item"> <a href   = "/MAinp" classname   = "nav-logo">Home</a> </li>
				<li     classname = "nav-item"> <a href   = "/Articles" classname  = "nav-link">Articles</a> </li>
				<li     classname = "nav-item"> <a href   = "/DOCCHAT" classname = "nav-link">Find a doctor</a> </li>
				<li     classname = "nav-item"> <a href   = "/PSYCHAT" classname = "nav-link">Find a psychologist</a> </li>
				<li     classname = "nav-item"> <a href   = "/ROOM" classname    = "nav-link">Chat Room</a> </li>
				<li     classname = "nav-item">   <a href = "/Login" classname   = "button">Logout</a> </li>
			</ul>
					<div classname = "hamburger"> <span classname = "bar"></span> <span classname = "bar"></span> <span classname = "bar"></span> </div>
				</nav>
			</header>
		   <div className='row'>
			   <div className='card' style={{position:"relative", top:"-33em", left:"-0"}}>
				   <h1>About us</h1>
			   <p style={{textAlign:"justify"}}> This is a prototype project from Aristotle University of Thessaloniki. The purpose of this project is to connect people with auto-immune bowel diseaces.
				   The sites sections are as shown in the navigation bar. So here you can find articles based on your condition, doctors to help and guide you.
				   You can also get in contact with psychologists so you can talk about your situation or anything else that bothers you. We hope that this prototype can
                   can bring people with needs to a solution. We would also love to hear your opinions about how the site can improve.</p>
			   </div>
		   </div>
		 


    </Fragment>
    )
    }

export default MAIN;