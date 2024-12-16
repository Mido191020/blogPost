const { render } = require("ejs")
const Article=require('../models/article')
// const article = require("../models/article")
exports.hello=(req,res)=>{
    res.render('articles/new',{article:new Article()})
}
exports.allArticles=async(req,res)=>{
    const articles=await Article.find().sort({createdAt:'desc'})
    res.render('articles/allArticles',{articles:articles})
}
exports.creatArticle=async(req,res)=>{
    let article=new Article({
        title:req.body.title,
        description:req.body.description,
        markdown:req.body.markdown
    })
    console.log(req.body);
    try{
        await article.save();
        res.redirect(`/articles/${article.id}`)
    }
  catch(e){
    //i dont understand this line
    console.log(e)
    res.render('articles/new',{article:article})
  }

}
exports.getId = async(req, res) => {
    try {
        const article = await Article.findById(req.params.id.trim());
        if(article == null) {
            return res.redirect('/');
        }
        res.render('articles/show', {article: article});
    } catch(e) {
        console.error(e);
        res.redirect('/');
    }
}
