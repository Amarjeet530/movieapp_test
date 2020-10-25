import React from 'react';
import Thumbnail from './thumbnail';

const Movies = ({volatile,handleClickMore}) => {
    const {details ,isLoading} = volatile || [];
    if(details.length === 0) return null;
    return(
        <>
            {(isLoading && (<div className="loading">Loading...</div>)) || (
                <div className="detailsWrapper">
                    {
                        details[0].map((detail)=><div key={detail.imdbID} className="thumbnailWrapper"><Thumbnail handleClickMore={()=>handleClickMore(detail.imdbID)} Title={detail.Title} Year={detail.Year} Poster={detail.Poster} imdbID = {detail.imdbID} Type={detail.Type}/></div>)
                    }
                </div>
            )}
           
        </>
    )
}
export default Movies;