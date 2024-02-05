


import React, { useState } from 'react'

import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import instance from './instance';

function Movie() {

    const[movie,setMovie]=useState('');
    const[movie1,setMovie1]=useState('');
    const[movie2,setMovie2]=useState('');
    const[found,setfound]=useState('none');
    console.log("movie-",movie);
    const apiKey='fa1c9c03';

    const moviename= async()=>{
        const url=`/?apikey=${apiKey}&t=${movie1}`
        console.log(url);
        const response=await instance.get(url);
        if((response.status>=200)&&(response.status<300))
       {
        setMovie(response.data)
        setfound('block')
       }
       else{
        setfound('none')
       }
       console.log(movie);
    }
  return (
    <div style={{width:"500px",margin:"auto",marginTop:"50px"}}>
        <MDBInputGroup>
      <MDBInput label='Search' value={`${movie1}`||""}  onChange={(e)=>{setMovie1(e.target.value)}}/>
      <MDBBtn rippleColor='dark' onClick={moviename}>
        <MDBIcon icon='search'/>
      </MDBBtn>
    </MDBInputGroup>

    <MDBCard style={{marginTop:"30px"}}>
      <MDBCardImage position='top' alt='...' src={movie.Poster} style={{width:"280px",height:"300px",margin:"auto"}} />
      <MDBCardBody>
        <MDBCardTitle>{movie.Title}</MDBCardTitle>
        <MDBCardText style={{textAlign:"justify"}}>
         {movie.Plot}
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Director:{movie.Director}</MDBListGroupItem>
        <MDBListGroupItem>Actors:{movie.Actors}</MDBListGroupItem>
        <MDBListGroupItem>Year:{movie.Year}</MDBListGroupItem>
        <MDBListGroupItem>Genre:{movie.Genre}</MDBListGroupItem>
      </MDBListGroup>
      
    </MDBCard>






    </div>
  )
}

export default Movie