import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube'; // Import the YouTube component
import './Row.css';
import { imageUrl, API_KEY } from '../../constraints/constraints';
import axios from '../../axios';

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [urlid, setUrlid] = useState(''); // Corrected typo here
  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data);
      setMovies(response.data.results);
    }).catch(err => {
      // Handle network error
    });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  };

  const handleMovie = (id) => { // Corrected function name here
    console.log(id);
    axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response => {
       if (response.data.results.length!==0){
         setUrlid(response.data.results[0])
       }else{
        console.log('Array empty')
       }
    });
  }

  return (
    <div className='row'> {/* Corrected 'class' to 'className' */}
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) =>
          <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} key={obj.id} />
        )}
      </div>
     { urlid &&<YouTube opts={opts} videoId={urlid.key} />}
    </div>
  )
}

export default Row;
