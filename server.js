const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();
// const cors = require('cors');
// app.use(cors);
app.use(history());
app.use(express.static(__dirname+'/dist'))
app.get('/',(req,res)=>{
    console.log(111)
    res.send();
})

app.listen(80,()=>{
    console.log('服务已开启');
})