const express=require('express');
const router=express.Router();
const controller=require('../controllers/articleController')

router.get('/new',controller.hello)
router.get('/:id',controller.getId)
router.post('/',controller.creatArticle)
router.get('/',controller.allArticles)
module.exports=router;