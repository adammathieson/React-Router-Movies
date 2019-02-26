import React from 'react';

const SavedList = props => {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <span key={movie.id} className="saved-movie">{movie.title} </span>
        ))}
          <div className="home-button" onClick={goHome}>Home</div>
      </div>
    );

    function goHome() {
      props.history.push("/");
  }
}

  export default SavedList;



