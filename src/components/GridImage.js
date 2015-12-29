import React from "react";
import Blazy from 'blazy'

export default class GridImage extends React.Component {

  componentDidMount() {
    new Blazy({ 
        selector: '.b-lazy' // all images
    });
  }

  componentWillUnmount() {
    // document.getElementByClassName('b-lazy').
  }

  render() {
    const { src, onClick, width, padding } = this.props;
    const link = this.props.link || src;

    const styles = {
      imageGridItem: {
        display: "inline-block",
        width: `${width}%`,
        boxSizing: "border-box",
        padding,
      },
      imageWrapper: {
        position: "relative",
        width: "100%",
        paddingBottom: "100%",
        // backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        cursor: "pointer"
      }
    }

    return (
      <div onClick={onClick} className="imageGridItem" style={styles.imageGridItem}>
          <div data-src={src} className="imageWrapper b-lazy" style={styles.imageWrapper}></div>
      </div>
    );
  }
}

GridImage.propTypes = {
  src: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
  padding: React.PropTypes.number,
  link: React.PropTypes.string
};
