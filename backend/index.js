const express = require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors({
    origin:'*'
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/DIRECTORIAL_ADVISORS_CONSORTIUM');
app.use(require('./routes/route'))


// app.use(cors());

// app.listen(3001, ()=> console.log("Server ON"))

app.listen(8000,function(){
    console.log("Server is runing")
})