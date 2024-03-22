import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ObjectivePage from '../objective'

const HomeLandingPage = () => {
  return (
    <div>
      <Box>
        <Grid container style={{background: "linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(86, 21%, 72%, 1) 45%, hsla(87, 29%, 54%, 1) 100%)",height:'65vh'}}>
            <Grid item xs={12}>
               <Grid container style={{display:'flex',alignItems:'center'}}>
                <Grid item xs={2.5} mt={12}>
                <img
                    src="./images/Group-1.png"
                    alt="LoginImage"
                    style={{ height: "20vh",marginLeft:'5rem' }}
                  />
                </Grid>
                <Grid item xs={3.5} mt={13}>
                    <Typography style={{fontSize:'2rem',textAlign:'center',fontWeight:'bold',color:'black',marginLeft:'4rem'}}>
                    Directorial Advisors Consortium
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                <img
                    src="./images/Group-177398-5.png"
                    alt="LoginImage"
                    style={{ height: "25vh",marginLeft:'6rem',marginTop:'6rem' }}
                  />
                </Grid>
               </Grid>
            </Grid>
        </Grid>

        <Grid item xs={12} style={{backgroundColor:'#35562a',padding:'0.3rem'}}>
            <Typography style={{color:'white',textAlign:'center'}}>
            JOIN THE LEADING RESPONSIBLE BUSINESS NETWORK
            </Typography>
        </Grid>
      </Box>
      
    </div>
  )
}

export default HomeLandingPage
