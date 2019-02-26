import React from 'react';


const SavedList = props => {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <span key={movie.id} className="saved-movie" onClick={goMovie}>{movie.title}</span>
        ))}
          <div className="home-button" onClick={goHome}>Home</div>
      </div>
    );

    function goMovie() {
      props.history.push("/movies/:id")
    }

    function goHome() {
      props.history.push("/");
  }
}

  export default SavedList;



