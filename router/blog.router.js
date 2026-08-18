const express =require('express')
const { postblog, getblog, getblogbyid, putblog, deleteblog } = require('../controller/blog.controller')

const router =express.Router()



router.post('/blog',postblog)
router.get('/blog',getblog)
router.get('/blog/:id',getblogbyid)
router.put('/blog/:id',putblog)
router.delete('/blog/:id',deleteblog)

module.exports =router