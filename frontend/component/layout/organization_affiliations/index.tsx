import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField/TextField'
import Typography from '@mui/material/Typography'
import { makeStyles } from "@mui/styles"
import directorialPostService from '../../../services/directorialPostService'


const useStyles = makeStyles({
    background_style: {
      backgroundImage: `url(${"./images/organization_affliation/BangaloreCity.png"})`,
      position: "relative",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "60vh",
      backgroundPosition: "center",
    },
    
  });

const OrganizationAffiliations = () => {
  const classes = useStyles();

  const [firstname,setFirstName] = useState('')
  const [lastname,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [contact,setContact] = useState('')
  const [message,setMessage] = useState('')
  
  const handleSubmit = async (event:any)=>{
    event.preventDefault();
    const formData = new FormData ();
    formData.append('firstname',firstname);
    formData.append('lastname',lastname);
    formData.append('email',email);
    formData.append('contact',contact);
 
    const response = await directorialPostService.create(formData);
    if (response.data.success  ==true){
        alert("Directorial Created Successfully")
    } else{
        setMessage("Post Failed")
    }
    setTimeout(function(){
        setMessage('');
    },2000)
    event.target.reset();
    window.location.reload();
}

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
            <Typography style={{textAlign:'center',background:'#35562a',padding:"0.4rem",color:'white'}}>OrganizationAffiliations</Typography>
        </Grid>
      </Grid>

      <Grid container my={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
        <img src="./images/organization_affliation/gov-1.png" style={{height:'13vh',width:'30vh'}}/>
        <img src="./images/organization_affliation/msme-1.png" style={{height:'13vh',width:'30vh'}}/>
        <img src="./images/organization_affliation/start.png" style={{height:'13vh',width:'30vh'}}/>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
      
      <Grid container className={classes.background_style}>
                <Grid item xs={12} style={{marginTop:'3rem'}}>
                <Typography style={{textAlign:'center',fontSize:'2.2rem',fontWeight:'bold',color:'#1e2a5e'}}>For Queries and Subscription</Typography>
                <Typography style={{textAlign:'center',fontSize:'2.2rem',fontWeight:'bold',color:'#1e2a5e'}}>Write to us</Typography>
                </Grid>
              
                {/* <form onSubmit={handleSubmit}> */}
                  <Grid container spacing={2} mt={"-2rem"}>               
                    <Grid item xs={1.5}></Grid>
                    <Grid item xs={3}>
                    <TextField id="outlined-basic" type='text' name='firstname' onChange={event => setFirstName(event.target.value)} placeholder='First Name' variant="outlined"  size='small' fullWidth style={{background:'white'}}/>
                    </Grid>
                    <Grid item xs={3}>
                    <TextField id="outlined-basic" type='text' name='lastname'  onChange={event => setLastName(event.target.value)} placeholder='Last Name' variant="outlined"  size='small' fullWidth style={{background:'white'}}/>
                    </Grid>
                    <Grid item xs={3}>
                    <TextField id="outlined-basic" type='text' name='email'  onChange={event => setContact(event.target.value)} placeholder='Contact' variant="outlined"  size='small' fullWidth style={{background:'white'}}/>
                    </Grid> 
                  </Grid>
                  <Grid container spacing={2}>               
                    <Grid item xs={1.5}></Grid>
                    <Grid item xs={9}>
                    <TextField id="outlined-basic" type='email' name='contact' onChange={event => setEmail(event.target.value)} placeholder='Email' variant="outlined"  size='small' fullWidth style={{background:'white'}}/>
                    </Grid>                
                  </Grid>
                  <Grid item xs={5.2}></Grid>
                  <Grid item xs={2}>
                    <Button type='submit' variant='contained' style={{width:'90%',height:'6vh',background:'#87b14b',textTransform:'capitalize',fontSize:'1.2rem',fontWeight:'500'}}>Submit</Button>
                  </Grid>
              {/* </form> */}
              <Grid item xs={11} >
                <Typography style={{textAlign:'center',fontSize:'1.6rem',fontWeight:'bold',color:'#1e2a5e',marginLeft:'5rem'}}>Become part of the network of purposeful leaders transforming lives and helping our planet and communities thrive</Typography>
              </Grid>
              
      </Grid>

    </Box>
  )
}

export default OrganizationAffiliations
