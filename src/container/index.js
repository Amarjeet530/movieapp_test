import React,{useState} from 'react';
import MovieSearch from '../component/movieSearch';
import {fetchAPI} from '../utils/api';
import Movies from '../component/movies';

const MovieContainer = () => {
    const [volatile, setVolatile]=useState({
        details:[],
        value:'',
        dropDownValue:'',
        msg:'Please enter title and select type',
        isLoading:true,
    });
    const onChange = ({target})=>{ // handle onchange
        const {value,name} = target;
        setVolatile((state)=>({
            ...state,
            [name]:value,
            msg:'',
        }))
    }
    const onClick = async () => {
        const {value,dropDownValue} = volatile || ''
        let msg ='';
        let details=[];
        let isLoading = true;
        try {
            if(value && dropDownValue){
                const response = await fetchAPI(value,dropDownValue);
                const result = await response;
                const {data} =result || {}
                const {Search, Error} = data || [];
                if(Search && !Error){
                    details.push(Search);
                    isLoading = false;
                }
                else{
                    msg = Error
                    isLoading = false;
                }
            }
            else{
                msg="Please enter title and select type"
                isLoading = false;
            }
        } catch (error) {
            console.log('err',error)
            msg="OOps! there is network problem"
            isLoading = false;
        }
        setVolatile((state)=>({
            ...state,
            msg,
            details,
            isLoading,
        }))
    }
    return(
        <>
            <div className="movieSearchWrap">
                <MovieSearch
                    volatile={volatile}
                    onChange={onChange}
                    onClick={onClick}
                />
            </div>
            {volatile?.msg && (<div style={{color:'red',display:'flex',justifyContent:'center'}}>{volatile?.msg}</div>)}
            <Movies volatile={volatile}/>
        </>
    )
}

export default MovieContainer;