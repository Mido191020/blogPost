const express=require('express')
const app=express();
const mongoose=require('mongoose')
const articleRouter=require('./routes/articles')
const Article=require('./models/article')
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
mongoose.connect('mongodb://localhost/blog')
.then(()=>{
    console.log("mongo is working")
})
.catch(err=>{
    console.error("mongo db connection error:")
})
app.use('/articles',articleRouter)
//what is this

app.get('/',async(req,res)=>{
    const articles=await Article.find().sort({createdAt:'desc'})
    res.render('articles/home',{articles:articles})
})

app.listen(3000,()=>{
    console.log("server is working")
})
