"use client"
import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const DistinguishedPatrons = () => {
  return (
    <Box mt={2}>
      <Grid container>
        <Grid item xs={12} style={{display:'flex',justifyContent:'space-around'}}>
            <img src="./images/Group-1.png" alt="LoginImage" style={{ height: "9vh" }}/>
        </Grid>

        <Grid item xs={12} style={{display:'flex',justifyContent:'space-around'}}>
            <Typography style={{fontSize:'2.2rem',fontWeight:'bold',color:'#2a3b6f'}}>
            Distinguished Patron
            </Typography>
        </Grid>

        <Grid item xs={12} style={{display:'flex',justifyContent:'space-around'}}>
            <Typography style={{fontSize:'2.5rem',fontWeight:'bold',color:'#2a3b6f'}}>
            CHIEF JUSTICE M. N. VENKATACHALIAH
            </Typography>
        </Grid>

        <Grid item xs={12} style={{display:'flex',justifyContent:'space-around'}}>
            <Typography style={{fontSize:'2.2rem',fontWeight:'bold',color:'#2a3b6f'}}>
            Former Chief Justice of India
            </Typography>
        </Grid>

        <Grid item xs={2}></Grid>
        <Grid item xs={3} mt={1}>
        <img src="./images/distinguished-patrons/Distinguished-Chief-Patron-Page-2-682x1024.jpg" alt="LoginImage" style={{ height: "80vh",width:'120%' }}/>
        </Grid>

        <Grid item xs={4} mt={1}>
        <img src="./images/distinguished-patrons/note.png" alt="LoginImage" style={{ height: "80vh",width:'120%',marginLeft:'4.6rem' }}/>
        </Grid>
      </Grid>

    <Grid container mt={1}>
        <Grid item xs={1.5}></Grid>
        <Grid item xs={10.5}>
            <Typography style={{fontSize:'1.7rem',fontWeight:'bold',color:'#2a3b6f'}}>
            HON’BLE MR. JUSTICE M. N. VENKATACHALIAH
            </Typography>
        </Grid>

        <Grid item xs={1.5}></Grid>
        <Grid item xs={9}>
            <Typography style={{fontSize:'1.2rem',color:'#2a3b6f'}}>
            On October 25, 1929, Justice Manepalli Narayana Rao Venkatachaliah was born in the former state of Mysore, where he also received his education. On November 6th, 1975, he graduated from the University of Mysore in Karnataka with a Bachelor of Science and a Bachelor of Law.
            </Typography>
        </Grid>
    </Grid>

    <Grid container mt={3}>
        <Grid item xs={1.5}></Grid>
        <Grid item xs={10.5}>
            <Typography style={{fontSize:'1.7rem',fontWeight:'bold',color:'#2a3b6f'}}>
            LEGAL CAREER:
            </Typography>
        </Grid>

        <Grid item xs={1.5}></Grid>
        <Grid item xs={9}>
            <Typography style={{fontSize:'1.2rem',color:'#2a3b6f'}}>
            In 1951, Justice Venkatachalaiah started his general Law practice. From November 6, 1975, he served as the High Court of Karnataka’s Permanent Judge. From October 5th, 1987, he served as a Supreme Court of India judge. He served as India’s 25th Chief Justice from 12 February 1993 until 24 October 1994 after being chosen by Shankar Dayal Sharma. L. M. Sharma came before him, and A. M. Ahmadi replaced him. The second Chairman of the National Human Rights Commission was Justice Venkatachalaiah (26th November 1996 – 24th October 1999). He was also the National Human Rights Commission’s Chairman (1996-1998). He also works on topics related to human rights and anti-corruption.
            </Typography>
        </Grid>
    </Grid>


    <Grid container mt={3}>
        <Grid item xs={1.5}></Grid>
        <Grid item xs={10.5}>
            <Typography style={{fontSize:'1.7rem',fontWeight:'bold',color:'#2a3b6f'}}>
            POST-RETIREMENT:
            </Typography>
        </Grid>

        <Grid item xs={1.5}></Grid>
        <Grid item xs={9}>
            <Typography style={{fontSize:'1.2rem',color:'#2a3b6f'}}>
            The National Commission, often known as the Justice Venkatachalaiah Commission, was established to investigate how the Constitution operated (NCRWC). This was established by a resolution of the Atal Bihari Vajpayee-led NDA government of India (22nd February 2000). The Indian Constitution needed to be amended, and that was the major goal. In 2002, the report was delivered.

            <br></br> 
            <br></br>
            Justice Venkatachalaiah supported the Initiatives of Change Centre for Indian Governance’s founding in 2003. He served on the Foundation for Restoration of National Values advisory board. This group was founded in 2008 with the goal of restoring India’s national and cultural values.
            <br></br>
            <br></br>
            The Sri Sathya Sai Institute of Higher Learning, Prasanthi Nilayam (Deemed University), a Modern Gurukula where the teacher-student interaction takes place in the process of Integral Education, is now led by Justice Venkatachalaiah as Chancellor. Intellectual, cultural, physical, service-related, and devotional is some of the dimensions. The Chairman of the Advisory Board of Prayoga is Justice Venkatachalaiah.
            </Typography>
        </Grid>
    </Grid>



    <Grid container mt={3}>
        <Grid item xs={1.5}></Grid>
        <Grid item xs={10.5}>
            <Typography style={{fontSize:'1.7rem',fontWeight:'bold',color:'#2a3b6f'}}>
            HONORS:
            </Typography>
        </Grid>

        <Grid item xs={1.5}></Grid>
        <Grid item xs={9}>
            <Typography style={{fontSize:'1.2rem',color:'#2a3b6f'}}>
            On June 23, 2000, he was presented with the Rotary Award for Human Rights. In 2004, the President of India awarded Justice Venkatachalaih the Padma Vibhushan, the second-highest civilian honor in India. He has an honoris causa Doctor of Letters degree from Pondicherry University and an honoris causa Doctor of Laws degree from Manipal University. Distinguished Doctorate from Belagavi’s Rani Channamma University.
            <br></br> 
            <br></br>
            Justice M N Venkatachaliah is adjudged the most erudite and urbane judge, who has adorned the Supreme Court of India. A judge with a deep knowledge of the philosophy of law and the ways of men, he provided moral and intellectual leadership. While being not wedded to any ‘ism’, he is devoted to constitutionalism and pragmatism, which makes for judicial statesmanship which has truly been his hallmark.
            <br></br>
            <br></br>
            Justice Venkatachaliah did splendid work as the Chairman of the National Human Rights Commission. He continues to work on anti-corruption and human rights issues. He is a Man and a Judge for all seasons. He is a personification of ‘sweetness and light’, verily a living legend.
            </Typography>
        </Grid>
    </Grid>



    <Box style={{background:'#1e2a5e',height:'5.5rem',display:'flex'}}>
      <Grid container >
        <Grid item xs={2}>
          <Typography style={{color:"white",fontWeight:'bold',marginTop:'1.8rem',marginLeft:'2rem'}}> Our Technology Partner:</Typography>
        </Grid>
        <Grid item xs={3}>
        <img src="./images/footer/Main-Logo-Color-Cropped-Transparent-1-1024x333.png" alt="values" style={{ height: "7vh",marginLeft:'2rem',marginTop:'0.8rem'}}/>
        </Grid>
        <Grid item xs={4}>
        <Typography style={{color:"white",fontSize:'1.5rem',fontWeight:'bold',marginTop:'1.8rem'}}> Directorial Advisors</Typography>
        </Grid>
        <Grid item xs={3} style={{display:'flex',alignItems:'center',marginTop:'0.7rem'}}>
        <Typography style={{color:"white",fontWeight:'bold'}}> Visitors:</Typography>
        <img src='./images/footer/visitors/0.gif' style={{height:'3vh',marginLeft:'1rem'}}/>
        <img src='./images/footer/visitors/0.gif' style={{height:'3vh'}}/>
        <img src='./images/footer/visitors/0.gif' style={{height:'3vh'}}/>
        <img src='./images/footer/visitors/7.gif' style={{height:'3vh'}}/>
        <img src='./images/footer/visitors/5.gif' style={{height:'3vh'}}/>
        <img src='./images/footer/visitors/8.png' style={{height:'3vh'}}/>
        </Grid>
      </Grid>
    </Box>

    <Grid container mt={2}>
      <Grid item xs={1}></Grid>
    <Grid item xs={4}>
      <Typography style={{fontSize:"1.3rem",fontWeight:'bold',color:'#1e2a5e'}}> Reach Us</Typography>
    </Grid>
    <Grid item xs={4}>
      <Typography style={{fontSize:"1.3rem",fontWeight:'bold',color:'#1e2a5e'}}>Quick Links</Typography>
    </Grid>
    <Grid item xs={3}>
    <Typography style={{fontSize:"1.3rem",fontWeight:'bold',color:'#1e2a5e'}}>Quick Links</Typography>
    </Grid>
    </Grid>
    <Grid container mt={3}>
        <Grid item xs={1}></Grid>
      <Grid item xs={4}>
        <Typography style={{fontSize:"1.3rem",fontWeight:'bold',color:'#1e2a5e',display:'flex'}}> 
        <CallOutlinedIcon/> <span style={{fontSize:'1rem',marginLeft:'1rem'}}>+91 9066055044 <br></br>
        +91 6363470948</span>
        </Typography>

        <Typography style={{fontSize:"1.3rem",fontWeight:'bold',color:'#1e2a5e',display:'flex',marginTop:'1rem'}}> 
        <EmailOutlinedIcon/> <span style={{fontSize:'1rem',marginLeft:'1rem'}}>ceo@directorialadvisors.com</span></Typography>

        <Typography style={{fontSize:"1.3rem",fontWeight:'bold',color:'#1e2a5e',display:'flex',marginTop:'1rem'}}> 
        <LocationOnOutlinedIcon/> <span style={{fontSize:'1rem',marginLeft:'1rem'}}>Corporate Identity Number : <br></br>U70200KA2023OPC180359<br></br>
  Address: OYO WORKSPACES INDIA PRIVATE <br></br> LIMITED Ranka Junction, AH45, Krishna Reddy <br></br>Industrial Estate, Dooravani Nagar, Bengaluru, <br></br> KA, 560016</span>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography style={{fontSize:"1rem",fontWeight:'bold',color:'#1e2a5e'}}>Home
        </Typography>
        <Typography style={{fontSize:"1rem",fontWeight:'bold',color:'#1e2a5e',marginTop:'1rem'}}>Contact Us
        </Typography>
      </Grid>
      <Grid item xs={3}>
      
      <Typography style={{fontSize:"1rem",fontWeight:'bold',color:'#1e2a5e'}}>Privacy Policy</Typography>
        <Typography style={{fontSize:"1rem",fontWeight:'bold',color:'#1e2a5e',marginTop:'1rem'}}>Terms and Conditions</Typography>
        <Typography style={{fontSize:"1rem",fontWeight:'bold',color:'#1e2a5e',marginTop:'1rem'}}>Disclaimer</Typography>
      </Grid>
    </Grid>
    <Grid item xs={12} style={{background:'#1e2a5e',padding:'10px'}} mt={2}>
      <Typography style={{textAlign:'center',color:'white',fontSize:'0.75rem'}}>Copyright © 2024 Directorial Advisors</Typography>
    </Grid>
    

    </Box>
  )
}

export default DistinguishedPatrons
