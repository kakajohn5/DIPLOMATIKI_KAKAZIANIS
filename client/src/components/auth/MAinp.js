import React, { Fragment, useState } from 'react'
const MAIN = ({}) => { 
    return (
        <Fragment>
       
		<body>
			<header classname = "header">
			<nav    classname = "navbar">
			<ul     classname = "nav-menu">
				<li     classname = "nav-item"> <a href   = "/MAIN" classname   = "nav-logo">Home</a> </li>
				<li     classname = "nav-item"> <a href   = "/Articles" classname  = "nav-link">Articles</a> </li>
				<li     classname = "nav-item"> <a href   = "/DOCCHAT" classname = "nav-link">Find a doctor</a> </li>
				<li     classname = "nav-item"> <a href   = "/PSYCHAT" classname = "nav-link">Find a psychologist</a> </li>
				<li     classname = "nav-item"> <a href   = "/ROOM" classname    = "nav-link">Chat Room</a> </li>
				<li     classname = "nav-item">   <a href = "/Login" classname   = "button">Logout</a> </li>
			</ul>
					<div classname = "hamburger"> <span classname = "bar"></span> <span classname = "bar"></span> <span classname = "bar"></span> </div>
				</nav>
			</header>
		</body>


    </Fragment>
    )
    }

export default MAIN;