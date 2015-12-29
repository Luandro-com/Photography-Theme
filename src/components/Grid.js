import React from "react"
import GridImage from "./GridImage"

export default class ReactRpg extends React.Component {
  render() {
    const { imagesArray, padding, onClick } = this.props;
    const columns = this.props.columns || 3;
    const width = Math.floor(100 / columns);
    const imageNodes = imagesArray.map((arr, index) => {
      return (
        <GridImage key={index} src={arr.src} onClick={onClick.bind(this, index)} width={width} padding={padding}/>
      );
    });

    return (
      <div className="imageGrid">
        {imageNodes}
      </div>
    );
  }
}

ReactRpg.propTypes = {
  imagesArray: React.PropTypes.array.isRequired,
  columns: React.PropTypes.number,
  padding: React.PropTypes.number
};

ReactRpg.defaultProps = {
  imagesArray: []
};
