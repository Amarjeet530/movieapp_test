import React from 'react';
import { 
    Link, 
} from 'react-router-dom'; 
const Thumbnail = ({Title,Year,Poster,imdbID,Type}) => {
    return(
        <div>
            <div style={{float:'left'}}>
                <img src={Poster} alt="loading..." style={{width:'220px',height:'220px'}}/>
            </div>
            <div style={{margin:'20px', float:'left'}}>
                <p><b>Title : </b> {Title}</p>
                <p><b>Year : </b> {Year} </p>  
                <Link to={{
                    pathname : `/details/${imdbID}`,
                    Type,
                }}>
                    More...
                </Link>       
            </div>
        </div>
    )
}
export default Thumbnail;
