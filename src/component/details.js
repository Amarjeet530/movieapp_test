import React, { useEffect, useState } from 'react';
import { fetchDetailsAPI } from '../utils/api';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
const Details = ({match,location}) => {
    const {params} = match || {}
    const { id } = params || "";
    const { Type } =location || '';
    const [detailsData ,setDetailsData] = useState({
        data: [],
        isLoading: true,
        msg:'',
    })
    const fetchDetails = async (id, Type)=>{
        let msg ='';
        let data = [];
        let isLoading = true;
        try {
            if(id && Type){
               const response = await fetchDetailsAPI(id, Type);
               const result = await response;
               data.push(result?.data);
               isLoading = false;
            }
            else{
                msg ='No Details ';
                isLoading = false;
            }
        } catch (error) {
            console.log("error",error)
            msg="Network Error"
            isLoading = false;
        }
        setDetailsData((state)=>({
            ...state,
            msg,
            data,
            isLoading,
        }))
    }

    useEffect(()=>{
        fetchDetails(id, Type);
    },[id, Type])
    const {data, msg, isLoading} = detailsData;
    const info = data[0] || {};
    const {
        Title,
        Year,
        Rated,
        Released,
        Runtime,
        Genre,
        Director,
        Writer,
        Plot,
        Language,
        Country,
        Awards,
        Poster,
        Ratings
    } = info || ''
    let rat = (Ratings && Ratings[0]?.Value) || '';
        rat = rat.split('/')
    const ratingValue = rat[0];
    const ratingOutOf = rat[1];
    if(msg) return <div style={{display:"flex",justifyContent:'center',padding:'150px'}}>{msg} <Link to="/">Go to home</Link></div> 
    return <>
     {
         (isLoading && (<div className="loading">Loading ..</div>)) || (
        <>     
        <div style={{display:'flex', justifyContent:'center'}}>  
            <div style={{display:'flex',border: '1px solid #ddd',borderRadius: '4px',padding: '10px'}}>
                <div style={{margin:'5px'}}>
                    <img src={Poster} alt="loading..."/>
                </div>
                <div style={{margin:'5px'}}>
                    <p><b>Title : </b> {Title}</p>
                    <p><b>Year :</b> {Year}</p>
                    <p><b>Rated :</b> {Rated}</p>
                    <p><b>Released :</b> {Released}</p>
                    <p><b>Runtime :</b> {Runtime}</p>
                    <p><b>Genre :</b> {Genre}</p>
                    <p><b>Director :</b> {Director}</p>
                    <p><b>Writer :</b> {Writer}</p>
                    <p><b>Plot :</b> {Plot}</p>
                    <p><b>Language :</b> {Language}</p>
                    <p><b>Country :</b> {Country}</p>
                    <p><b>Awards :</b> {Awards}</p>
                    <div><b>Ratings :</b>  
                        <StarRatings
                            rating={Number(ratingValue)}
                            starRatedColor="blue"
                            numberOfStars={Number(ratingOutOf)}
                            name='rating'
                        />
                   </div>
                </div>
            </div>
           
            
        </div>
        <div style={{textAlign:'center'}}> <Link to="/">Back</Link></div>
        </>
        )}
    </>
}
export default Details

