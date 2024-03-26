import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const ObjectivePage = () => {
  return (
    <>
    <Box>
        <Grid container style={{background: "linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 1) 63%, hsla(87, 53%, 83%, 1) 100%)",height:'72vh'}}>
        <Grid item xs={2} style={{marginLeft:'40rem',marginTop:'1rem'}} >
                <Typography style={{background:'#1e2a5e',textAlign:'center',color:'white',fontSize:'1.5rem',borderRadius:'8px',marginTop:'1rem',padding:'0.6rem',fontWeight:'bold'}}>Objective</Typography>   
        </Grid>
          <Grid container mt={4}>
          <Grid item xs={1}></Grid>
           <Grid item xs={10}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify'}}>
           <strong>Directorial Disha :</strong> An comprehensive e-magazine providing vital information to corporate leaders, senior officers,and academician launching in a digital platform that recognizes the most unique communications from innovative leaders from all companies their recognition and significant components of the company’s success and leadership essentials.
           </Typography>
           </Grid>
          </Grid>


          <Grid container mt={2}>
          <Grid item xs={1}></Grid>
           <Grid item xs={10}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify'}}>
           Today’s technology is only transforming us more effective at recognition. We can utilize digital platforms to ensure that the whole process becomes more meaningful, personalized, and timely. Companies that prioritize recognition have a better chance of retaining their market leadership and gain bigger clients effectively. The digital medium is now one of the most sought-after communication methods, and it is pertinent to mention that enhanced communication comes a larger market. By getting recognized, companies gain the ability to introduce them selves in such growing markets only to capture potential customers’ attention.</Typography>
           </Grid>
          </Grid>

          <Grid container>
          <Grid item xs={1}></Grid>
           <Grid item xs={10}>
           <Typography style={{fontSize:'1.3rem',textAlign:'justify'}}>
           <strong>Directorial Disha :</strong> e-Magazine is a standard corporate leaders perquisite for insight on strategic corporate and global issues. It also provides quick reviews on governance and legal updates to help CEO, directors, shareholders, top management executive etc. to influence effectively in corporate transformation.
           </Typography>
           </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ObjectivePage
