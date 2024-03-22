import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const VissionMission = () => {
  return (
    <Box mt={4}>
      <Grid container>
        <Grid item xs={6}>
          <img
            src="./images/desk.png"
            alt="LoginImage"
            style={{ height: "70vh", marginLeft: "7rem" ,marginTop:'4rem'}}
          />
        </Grid>
        <Grid item xs={6}>
            <Typography style={{fontSize:'2.5rem',marginTop:'2.5rem',fontWeight:'bold'}}>Our : Vision, Mission, Values</Typography>
        
            <Grid container mt={2}>
                <Grid item xs={1.2}>
                <img src="./images/mission.png" alt="vission" style={{ height: "7vh"}}/>
                </Grid>
                <Grid item xs={10}>
                    <Typography mt={0.5} fontSize={'1.1rem'} style={{color:'#64748b'}}><span style={{fontSize:'1.5rem',fontWeight:'bold',color:'black'}}>Vision</span><br></br>
                    To lead and serve the Leadership Community and Business Entities through Advocacy, Education, Ethical Business Practices and tools for success.</Typography>
                </Grid>


                <Grid item xs={1.2} mt={2}>
                <img src="./images/vission.png" alt="mission" style={{ height: "6vh",marginLeft:'0.3rem'}}/>
                </Grid>
                <Grid item xs={10} mt={2}>
                    <Typography mt={0.5} fontSize={'1.1rem'} style={{color:'#64748b'}}><span style={{fontSize:'1.5rem',fontWeight:'bold',color:'black'}}>Mission</span><br></br>
                    Provide experiential and comprehensive articles to responsible leaders dedicated to making a substantial positive impact on business and society.
                    </Typography>
                </Grid>


                <Grid item xs={1.2} mt={2}>
                <img src="./images/values.png" alt="values" style={{ height: "7vh",marginLeft:'0.3rem'}}/>
                </Grid>
                <Grid item xs={10} mt={2}>
                    <Typography mt={0.5} fontSize={'1.1rem'} style={{color:'#64748b'}}><span style={{fontSize:'1.5rem',fontWeight:'bold',color:'black'}}>Values</span><br></br>
                    The following values guide us in achieving our mission and our vision:
                    <li>Thought leadership and innovation</li>
                    <li> Enable an open exchange and development of knowledge</li>
                    <li>Engage actively within our networks</li>
                    <li>Critical thinking, diversity, and integrity</li>
                    <li>Accountability, responsibility, and transparency</li>
                    <li>Impacting business and society</li>
                    <li>Engage in research relevant for the corporate world, organizations, and governments.</li>
                    <li>Provide analytically sound facts for evidence-based decision making.</li>
                    </Typography>
                </Grid>




               
            </Grid>

        
        </Grid>

        

      </Grid>
    </Box>
  );
};

export default VissionMission;
