import React from 'react'
import {Link} from 'react-router'
require('../styles/menu.css');

export default ({}) => (
	<div className="menu">
		<div className="menu-container">
			<div className="main-menu">
				<div className="logo">
					<Link to="/">
					 	<img src="http://i.imgur.com/WImWcSf.png" />
					</Link>
					<h1 className="hide">Jamille Queiroz Fotografia</h1> 
				</div> 
				<div className="itens">
					<p><Link to="gallery/vao/23">Vão de Almas<img src="imagens/twig.svg" /></Link></p>
					<p><Link to="gallery/nath/32">PARAL.ELOS<img src="imagens/twig.svg" /></Link></p>
					<p><Link to="gallery/indios/27">ENCONTRO DE CULTURAS<img src="imagens/twig.svg" /></Link></p>
					<p><Link to="about">Sobre<img src="imagens/twig.svg" /></Link></p>
					<p><Link to="contact">Contato<img src="imagens/twig.svg" /></Link></p>
				</div>
			</div>
			
			<div className="social">
				<a href="https://www.facebook.com/JamilleQueirozFotografia"> 
					<i className="fa fa-facebook"></i>
				</a>
				<a href="mailto:jamillejqueiroz@gmail.com"> 
					<i className="fa fa-envelope-o"></i>
				</a>
				<a href="https://www.instagram.com/jmllqrz/"> 
					<i className="fa fa-instagram"></i>
				</a>
				<a href="https://www.google.com.br/maps/place/Alto+Para%C3%ADso+de+Goi%C3%A1s+-+State+of+Goi%C3%A1s/@-14.1613887,-47.8035694,10z/data=!3m1!4b1!4m2!3m1!1s0x93457ed8b8208d15:0x87d21127300e98a0?hl=en"> 
					<i className="fa fa-map-marker"></i>
				</a>
			</div>
		</div>
	</div>	
)