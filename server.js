/**
 * Created by shuiqin on 10/31/18.
 */
const express = require('express');
const app = express();// express.static提供静态文件
app.use(express.static('public'));

app.listen(3000, ()=>{
  console.log("server start");
});