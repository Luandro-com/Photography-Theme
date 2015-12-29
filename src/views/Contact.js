import React from 'react'
require('../styles/contact.css')

const styles = {
	wrapper: {
		width: '75%',
		float: 'right',
		height: '100%'
	},
	text: {
		width: '100%',
		margin: '0 auto',
		textAlign: 'center'
	},
	pic: {
		width: '100%',
		height: 300,
		backgroundImage: 'url(../imagens/sobreecontato/contato.jpg)',
		backgroundSize: 'cover',
		backgroundPosition: '50% 30%',
	}
}

export default ({}) => (
	<div style={styles.wrapper}>
		<h1 className="hide">Contato</h1>
		<div style={styles.pic} className="fade-bottom"></div>
		<div style={styles.text}>
			<p style={{fontFamily: 'Lato', color: 'rgba(0,0,0,0.9)', padding: 40}}>Disponível para ensaios e envetos na Chapada dos Veadeiros</p>
			<h1 style={{fontFamily: 'Lato', color: 'grey', paddingTop: 0}}><a href="mailto:jamillejqueiroz@gmail.com">jamillejqueiroz@gmail.com</a></h1>
		</div>
	</div>
)