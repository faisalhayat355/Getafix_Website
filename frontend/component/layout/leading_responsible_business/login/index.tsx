"use client";
import {Button, Grid} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";

const useStyles = makeStyles({
  background_style: {
    backgroundImage: `url(${"./images/BngBackround.png"})`,
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "60vh",
    backgroundPosition: "center",
  },
  
});
interface Props {}

const LeadingResponsibleBusiness = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.background_style}>
                <Grid item xs={2.4} style={{marginLeft:'8.5rem',marginTop:'3rem'}}>
                <Link href="/distinguished-patrons" style={{ textDecoration: "none" }}>
                 <Button variant="contained" size="small" style={{background:'#1e2a5e',textTransform:'capitalize',fontSize:'1.2rem',padding:'0.6rem',borderRadius:'10px'}}>Distinguished Chief Patron</Button>
                </Link>
                </Grid>
                <Grid item xs={1.3} style={{marginTop:'3rem'}}>
                <Link href="/chief-patrons" style={{ textDecoration: "none" }}>
                 <Button variant="contained" size="small" style={{background:'#1e2a5e',textTransform:'capitalize',fontSize:'1.2rem',padding:'0.6rem',borderRadius:'10px'}}>Chief Patron</Button>
                </Link>
                </Grid>
                <Grid item xs={1.55} style={{marginTop:'3rem',marginLeft:'0.5rem'}}>
                <Link href="/advisory-patrons" style={{ textDecoration: "none" }}>
                 <Button variant="contained" size="small"style={{background:'#1e2a5e',textTransform:'capitalize',fontSize:'1.2rem',padding:'0.6rem',borderRadius:'10px'}}>Advisory Patron</Button>
                </Link>
                </Grid>
                <Grid item xs={2.25} style={{marginTop:'3rem',marginLeft:'0.5rem'}}>
                <Link href="/editorial_board" style={{ textDecoration: "none" }}>
                 <Button variant="contained" size="small"style={{background:'#1e2a5e',textTransform:'capitalize',fontSize:'1.2rem',padding:'0.6rem',borderRadius:'10px'}}>Editorial Board Members</Button>
                </Link>
                </Grid>
                <Grid item xs={2.5} style={{marginTop:'3rem'}}>
                 <Button variant="contained" size="small"style={{background:'#1e2a5e',textTransform:'capitalize',fontSize:'1.2rem',padding:'0.6rem',borderRadius:'10px'}}>List of Subscribers/Members</Button>
                </Grid>

              <Grid container spacing={2}>               
                <Grid item xs={1.5}></Grid>
                <Grid item xs={4} style={{marginTop:'-4rem'}}>
                <Link href="/company" style={{ textDecoration: "none" }}>
                    <img src="./images/directorial_disha.png" style={{height:'13vh',width:'65vh'}}/>
                  </Link>
                  </Grid>
                  <Grid item xs={0.5}></Grid>
                  <Grid item xs={4} style={{marginTop:'-4rem'}}>
                  <Link href="/company" style={{ textDecoration: "none" }}>
                  <img src="./images/directors_round.png" style={{height:'13vh',width:'65vh'}}/>
                  </Link>
                  </Grid>
              </Grid>
      </Grid>

      <div style={{width:'100%',height:'4.5vh',background:'#35562a'}}></div>
    </>
  );
};

export default LeadingResponsibleBusiness;
