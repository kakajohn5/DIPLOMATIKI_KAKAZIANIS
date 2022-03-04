import React, { Fragment, useState } from 'react'
const Learn = ({}) => { 
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
	<article>
            <h1>Breaking News: Cat does not give a damn</h1>
            <p><strong>Author:</strong> Bill Clinton, <strong>Published:</strong> Yesterday</p>

            <div>
                <img src="http://peoplecancode-public.s3.amazonaws.com/cat.jpg"/>
                <span>Image source: The WEB</span>
            </div>

            <p>
                This paragraph will include the photo of a random cat that the author of this tutorial has found online. You can replace this text with any random text. The sole purpose of this copy is to fill the space and make sure that the image to the left has enough text to low around it. I even decided to copy the previous paragraph. This paragraph will include the photo of a random cat that the author of this tutorial has found online. You can replace this text with any random text. The sole purpose of this copy is to fill the space and make sure that the image to the left has enough text to low around it.
            </p>
            <p>This paragraph will include the photo of a random cat that the author of this tutorial has found online. You can replace this text with any random text. The sole purpose of this copy is to fill the space and make sure that the image to the left has enough text fo low around it.</p>

        </article>
</body>


    </Fragment>
    )
    }

export default Learn;