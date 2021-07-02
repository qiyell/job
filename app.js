const express =require('express');
const sturouter = require('./router.js')
const app = express();

//设置模板引擎
app.set("view engine",'ejs');
//加载静态资源
app.use(express.static('public'));

//使用路由
app.use(sturouter);


//监听
app.listen(8000,(req,res) => {
    console.log('访问：http://localhost:8000')
})