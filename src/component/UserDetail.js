import React,{useState} from 'react';
import {Button,Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



import axios from 'axios';


const useStyles = makeStyles({
    root: {
      maxWidth: 250,
      margin: 10,
    },
    media: {
      height: 100,
    },
  });


const UserDetail = () => {
    const [user,setUser]=useState([]);
    const classes = useStyles();
    // const fetchData=()=>{
        axios.get("https://reqres.in/api/users?page=1")
        .then((response)=>{
            console.log(response);
            setUser(response.data.data);
        })
    // }
  return (
    <div>
       
      {/* <Button variant="contained" color="primary"onClick={fetchData} style={{margin:"10px"}}>
        fetch Data
      </Button> */}
     
      
      


      
        <Grid container direction="row" style={{border:"1px solid black",marginTop:"90px"}}>
            {/* <Grid container item xs={6} justifyContent="center" style={{border:"1px solid black"}}> */}
      {
        user.map((value)=>{
            return(
                <Grid item xs={4}>
                <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={value.avatar}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {value.first_name} {value.last_name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {value.email}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
        </Grid>
            )
        })
      }
      </Grid>
      {/* </Grid> */}
      
      
    </div>
  )
}

export default UserDetail
