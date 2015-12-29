import React from 'react'
import Lightbox from 'react-images'
import Grid from '../components/Grid'
import PreLoader from '../components/PreLoader'
require('../styles/gallery.css')

const masonryOptions = {
    transitionDuration: 0
};

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			lightboxIsOpen: false,
			currentImage: 6
		}
		this.closeLightbox = this.closeLightbox.bind(this)
		this.openLightbox = this.openLightbox.bind(this)
		this.gotoPrevious = this.gotoPrevious.bind(this)
		this.gotoNext = this.gotoNext.bind(this)
	}

	gotoPrevious() {
		this.setState({
			currentImage: this.state.currentImage -1
		})
	}

	gotoNext() {
		this.setState({
			currentImage: this.state.currentImage +1
		})
	}

	openLightbox(index) {
		this.setState({
			lightboxIsOpen: true,
			currentImage: index
		})

	}

	closeLightbox() {
		this.setState({
			lightboxIsOpen: false
		})
	}

	render() {
		const {number, title} = this.props.params
		let thumbs = []
		let images = []
		let i
		for(i = 1; i < parseInt(number) + 1; i++) { thumbs.push({src: `../imagens/${title}/thumbs/${title}${i}.jpg`}) }
		for(i = 1; i < parseInt(number) + 1; i++) { images.push({src: `../imagens/${title}/${title}${i}.jpg`}) }
		let text
		switch (title) {
			case "nath":
				text = (
					<span>
						<p>Considerando as cores como luz, a cor branca resulta da sobreposição de todas as cores, enquanto o preto é a ausência de luz. Uma luz branca pode ser decomposta em todas as cores (o espectro) por meio de um prisma.</p>
						<p>A cor branca é a junção de todas as cores do espectro de cores. É definida como "a cor da luz", em cores-luz, ou como "a ausência de cor", em cores-pigmento. É a cor que reflete todos os raios luminosos, não absorvendo nenhum e por isso aparecendo como clareza máxima. </p>
	       				<p>A cor preta é a mais escura do espectro de cores. É definida como "a ausência de luz", em cores-luz, ou como "a mistura de todas as cores", em cores-pigmento. É a cor que absorve todos os raios luminosos, não refletindo nenhum e por isso aparecendo como desprovida de clareza. </p>
	      				Essas fotos refletem essa presença e ausência, sentidas no corpo, na pele, nos gestos. Linhas gêmeas que andam em direções opostas.
      				</span>
      			)
				break
			case "vao":
				text = (
					<span>
						<p>"É o município de Cavalcante, em Goiás, onde se situa Vão de Almas, o local desta romaria-festa de Nossa Senhora D'Abadia. Trata-se de saberes, tradições e referências norteadoras do cotidiano de homens e mulheres, moradores do território remanescente quilombola Kalunga.</p>
						<p>Os Kalungas prosseguem lutando por direitos, pela manutenção da terra, pela cidadania, além de Cavalcante, nos municípios de Teresina de Goiás e Monte Alegre. </p>
						<p>Os Kalunga são definidos como formados por escravos fugidos das minas, que se expandem com migrações  de escravos alforriados que adquiriram terras.</p>
						<p>A região onde se celebra esta Romaria é cortada pelo Rio Paranã, do qual é tributário Rio de Almas, que corta a sede de Cavalcante, e que toma o nome de Rio Branco no espaço sagrado, assim mantido para anualmente se realizar este festejo.</p>
						<p>Esta festa poderia apenas mostrar a devoção dos Kalunga por uma santa muito popular em outros lugares do Brasil. Mas aqui ela tem, entre outros, um sentido especial: marca um dos momentos importantes do ano, para celebrar o dom da vida propiciado pela terra, de onde tiram seu sustento. Como as chuvas regulam o plantio, com elas em setembro começarão os roçados. As pessoas pedem nestes rios sagrados que Nossa Senhora D'Abadia os proteja na terra, para nela nascerem seus alimentos e nela viverem. Nesta cerimônia saem dois Impérios: o do divino e o da Nossa Senhora D'Abadia. Nestes cortejos vão se juntando imagens dos chamados antigos reis negros com a do imperador: a festa católica se funde com a celebração dos ancestrais Kalunga.</p>
						<p>(...)</p>
						<p>Trecho do Livro Nossa Senhora D'Abadia.</p>
						Essas fotos foram os retratos tímidos que consegui fazer durante esses dias, na minha primeira romaria. Não são retratos da Festa em sim, mas das pessoas que cruzei, conversei e troquei meu olhar.
					</span>
				)
				break
			case "indios":
				text = (
					<span>
						<p>Fotos feitas durante o Encontro de Culturas Tradicionais da Chapada dos Veadeiros, em julho de 2015. </p>
						Povo Yawalapiti, do Xingu e do Povo Krahô, do Tocantins.
					</span>
				)
				break
			default:
				text = "Descrição em breve..."
				break
		}
		return (
			<div className="gallery">
				<div style={{width: '80%', margin: '30px auto 100px'}}>
					<i className="fa fa-quote-left" style={{fontSize: 22, color: 'rgba(0,0,0,0.4)', position: 'relative', top: 30, right: 15}}></i>
					{text}
					<i className="fa fa-quote-right" style={{fontSize: 22, color: 'rgba(0,0,0,0.4)'}}></i>
				</div>	
				<Grid imagesArray={thumbs} onClick={this.openLightbox.bind(this)} columns={3} padding={3} />
				<Lightbox
			        images={images}
			        isOpen={this.state.lightboxIsOpen}
			        onClickPrev={this.gotoPrevious}
			        onClickNext={this.gotoNext}
			    	onClose={this.closeLightbox}
			    	currentImage={this.state.currentImage}
			    />
			</div>
		)
	}
}