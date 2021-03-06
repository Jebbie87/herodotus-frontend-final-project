import React, {Component} from 'react';
import DetailedCard from '../containers/DetailedCard.jsx';

class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {currentMovie: this.props.movieData,}
  }

  handleClick = () => {
    this.props.selectMovie(this.props.movieData)
  }

  render() {
    const style = {backgroundImage: `url(${this.props.movieData.poster})`};
    return (
      <div className="card
        col-lg-2
        col-md-3
        col-sm-4
        col-xs-4">
        <article
          onClick={this.handleClick}
          className="film-card"
          style={style}
        >
          <div>
            {this.props.movieData.title} ({this.props.movieData.year})
          </div>
        </article>
        {
          this.props.showCard === this.state.currentMovie ?
          <DetailedCard currentMovie={this.state.currentMovie} /> : null
        }
      </div>

    );
  }
}

export default Card;