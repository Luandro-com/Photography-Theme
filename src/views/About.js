import React from 'react'

const styles = {
	wrapper: {
		width: '75%',
		float: 'right',
		height: '100%'
	},
	text: {
		width: '60%',
		float: 'left',
		padding: '100px 30px'
	},
	pic: {
		width: '40%',
		float: 'right'
	},
	img: {
		maxWidth: '100%',
		marginTop: -60,
    	marginLeft: -110,
    	transform: 'rotate(7deg)'
	}
}

export default ({}) => (
	<div style={styles.wrapper}>
		<div style={styles.text}>
			<p>
				Nascida em Fortaleza, Ceará, fotografa desde os 15, quando ganhou uma câmera digital simples. Aos 18, ganhou uma câmera analógica e aí começou a ligação forte pela fotografia. Estudou Letras(com um pézinho no Cinema) na Universidade Federal do Ceará e atualmente mora na Chapada dos Veadeiros, em Goiás, onde trabalha como fotógrafa., realizando ensaios comerciais e artísticos.
			</p>
		</div>
		<div style={styles.pic}>
			<img style={styles.img} src="../imagens/sobreecontato/sobre1.jpg" />
			<footer style={{position: 'absolute', bottom: 8, left: '30%', padding: '5px 10px', background: 'black', color: 'white', borderRadius: 25}}>
				<p style={{fontSize: '0.4em'}}>design por mim & desenvolvido por luandro</p>
			</footer>
		</div>
	</div>
)