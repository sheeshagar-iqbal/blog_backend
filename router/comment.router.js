const express =require('express')
const { postcomment, getcomment, deletecomment } = require('../controller/comment.controller')


const router =express.Router()



router.post('/comment',postcomment)
router.get('/comment',getcomment)
router.delete('/comment/:id',deletecomment)

module.exports =router