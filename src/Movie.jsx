


import React, { useState } from 'react'
import instance from './instance';

import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';


import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Footer from './Footer';

function Movie() {

    const[movie,setMovie]=useState('');
    const[movie1,setMovie1]=useState('');
    const[found,setfound]=useState('none');
    const[linkmovie,setlinkMovie]=useState('');
    
    const apiKey='fa1c9c03';

    const moviename= async()=>{
      setfound('none')
        const url=`/?apikey=${apiKey}&t=${movie1}`
        console.log(url);
        const response=await instance.get(url);
        console.log(response.status);
        console.log(response.data.Response);
        
        setMovie(response.data)

        if((response.data.Response==='False'))
        {
         
          alert("Movie not found....")
          setfound('none')
        }
        else{
          setfound('block')
        }
      
    }


    const moviename2= async(param)=>{
      
      console.log('Movielink',linkmovie);
      console.log('param in parent',param);
      const url=`/?apikey=${apiKey}&t=${param}`
      console.log(url);
      const response=await instance.get(url);
      console.log(response.status);
      console.log(response.data.Response);
      
      setMovie(response.data)

      if((response.data.Response==='False'))
      {
       
        alert("Movie not found....")
        setfound('none')
      }
      else{
        setfound('block')
      }
    
     
   
     console.log(movie);
  }
    const theme = useTheme();
  return (
    <>
    <div style={{width:"500px",margin:"auto",marginTop:"50px"}}>
           <MDBInputGroup>
      <MDBInput label='Search' value={`${movie1}`||""}  onChange={(e)=>{setMovie1(e.target.value)}}/>
      <MDBBtn rippleColor='dark' onClick={moviename}>
        <MDBIcon icon='search'/>
      </MDBBtn>
    </MDBInputGroup>



    <Card sx={{ paddingBottom:"30px",display: 'flex',width:"500px",height:"550px",marginTop:"20px" ,justifyContent:"center",display:`${found}`}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5"style={{color:'#BA4A00'}}>
            {movie.Title}
          </Typography>
          
          <Typography variant="subtitle1" color="text.secondary" component="div" style={{textAlign:"justify"}}>
           <span style={{color:'#BA4A00'}}>Plot: </span>{movie.Plot}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <span style={{color:'#BA4A00'}}>Director: </span>
            {movie.Director}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <span style={{color:'#BA4A00'}}>Actors: </span> {movie.Actors}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <span style={{color:'#BA4A00'}}>Genre: </span>  {movie.Genre}
          </Typography>
       
        <Typography variant="subtitle1" color="text.secondary" component="div">
        <span style={{color:'#BA4A00'}}> Year: </span> {movie.Year}
          </Typography>
          </CardContent>
        
      </Box>
   <div className="row" style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
   <img src={movie.Poster} alt="" style={{width:"260px",height:"240px"}}/>
   </div>
 
    
    </Card>


    </div>
    <Footer pass={moviename2}/>
    </>
  )
}

export default Movie