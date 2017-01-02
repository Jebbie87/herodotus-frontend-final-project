import React, {Component} from 'react';
import DetailedTabs from '../components/DetailedTabs.jsx'

class DetailedCard extends Component {
  // componentDidMount(){
  //   timeline = new TL.Timeline('timeline-embed',
  //      'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml');
  // }

  render() {
    const currentMovie = this.props.currentMovie
    return (
      <div onClick={this.props.hideDetails}>
        <div className="detailed-card">


          <img role="presentation" className="big-movie-poster" src={currentMovie.poster} />
          <div className="stuff-next-to-poster">
            <DetailedTabs
              currentMovie={this.props.currentMovie}
              hideCard={this.props.hideCard}
              user={this.props.user}
              currentMovieComments={this.props.currentMovieComments}
            />
          </div>


        </div>
      </div>
    );
  }
}

export default DetailedCard;
