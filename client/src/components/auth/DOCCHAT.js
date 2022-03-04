import React, { Fragment, useState } from 'react'

/*const hamburger = document.querySelector(".hamburger");
const navMenu   = document.querySelector(".nav-menu");*/


const DOCCHAT = ({}) => { 
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
    <div classname = "container mt-5">
	<div classname = "row d-flex ">
	<div classname = "col-md-7">
	<div classname = "card p-3 py-4">
					
					<div classname = "text-center mt-3"> <span classname     = "bg-secondary p-1 px-4 rounded text-white">Pro</span>
					<h5  classname = "mt-2 mb-0">Alexender Schidmt</h5> <span>UI/UX Designer</span>
					<div classname = "px-4 mt-1">
					<p   classname = "fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
						</div>
						<ul    classname = "social-list">
						<li><i classname = "fa fa-facebook"></i></li>
						<li><i classname = "fa fa-dribbble"></i></li>
						<li><i classname = "fa fa-instagram"></i></li>
						<li><i classname = "fa fa-linkedin"></i></li>
						<li><i classname = "fa fa-google"></i></li>
						</ul>
						<div classname = "buttons"> <button classname = "btn btn-outline-primary px-4">Message</button> <button classname = "btn btn-primary px-4 ms-3">Contact</button> </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>


    </Fragment>
    )
    }
   
export default DOCCHAT;