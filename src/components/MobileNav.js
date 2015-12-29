import React from 'react'
import {Link} from 'react-router'
require('../styles/mobilemenu.css')

export default ({}) => (
	<nav className="mobile-nav">
	  <div id="menuToggle">
	    <input type="checkbox" />
	    <span></span>
	    <span></span>
	    <span></span>
	    <ul id="menu">
	    	<div className="mobile-logo">
				<Link to="/">
				 	<img src="http://i.imgur.com/WImWcSf.png" />
				</Link>
				<h1 className="hide">Jamille Queiroz Fotografia</h1> 
			</div> 
	      	<p><Link to="gallery/vao/23">Vão de Almas</Link></p>
			<p><Link to="gallery/nath/32">PARAL.ELOS</Link></p>
			<p><Link to="gallery/indios/27">ENCONTRO DE CULTURAS</Link></p>
			<p><Link to="about">Sobre</Link></p>
			<p><Link to="contact">Contato</Link></p>
	    </ul>
	  </div>
	</nav>
)