import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const DirectorialDisha = () => {
  return (
    <>
    <Box>
        <Grid container mt={5} style={{background: "linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 1) 63%, hsla(87, 53%, 83%, 1) 100%)",height:'72vh'}}>
        <Grid item xs={12} style={{marginLeft:'7.7rem',marginTop:'1rem'}} >
                <Typography style={{color:'#64748b',fontSize:'2.3rem',fontWeight:'bold'}}>To accomplish this mission Directorial Disha:</Typography>   
        </Grid>
          <Grid container mt={1}>
          <Grid item xs={1}></Grid>
           <Grid item xs={10}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify'}}>Publishes the e-magazine which includes: features, interviews, analysis, opinions, corporate notes, book reviews, events, and other items designed to inform readers on corporate governance and related matters.</Typography>
           </Grid>
          </Grid>

          <Grid container style={{marginTop:'1rem'}}>
          <Grid item xs={1}></Grid>
           <Grid item xs={10}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify'}}>Conducts research on issues and developments related to corporate governance. These researches are designed to expand and deepen the level of knowledge on corporate governance with the ultimate objective of generating model/models for corporate governance that is unique to the corporate/business setting.</Typography>
           </Grid>
          </Grid>
          <Grid container style={{marginTop:'1rem'}}>
          <Grid item xs={1}></Grid>
           <Grid item xs={10}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify'}}>To analyze and critique existing and proposed corporate governance policies, rules and regulations as they develop.</Typography>
           </Grid>
          </Grid>

          <Grid container style={{marginTop:'1rem'}}>
          <Grid item xs={1}></Grid>
           <Grid item xs={10}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify',fontWeight:'bold',color:'#2a3b6f'}}>Produces analytical stories on corporate governance-related policies, rules, regulations, and similar items;</Typography>
           </Grid>
          </Grid>

          <Grid container style={{marginTop:'1rem'}}>
          <Grid item xs={1}></Grid>
           <Grid item xs={10}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify',color:'#2a3b6f'}}>Writes reviews of corporate governance-related literature with the objective of seeking lessons, cases, and examples that can be applied to the Corporates; and Writes regular special reports designed to evaluate on-going developments and issues related to corporate governance and other corporate affairs issues.</Typography>
           </Grid>
          </Grid>

          <Grid container style={{marginTop:'1rem'}}>
          <Grid item xs={1}></Grid>
           <Grid item xs={10}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify',color:'#2a3b6f'}}>To increase awareness and consciousness of the value/importance of corporate governance in all levels of the business community. The goal is to enhance and raise the standards of corporate governance to the highest levels. To accomplish this mission <span style={{fontWeight:'bold'}}>The Directorial</span> is launched.</Typography>
           </Grid>
          </Grid>


        </Grid>
      </Box>
    </>
  )
}

export default DirectorialDisha
