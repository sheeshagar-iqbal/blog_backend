const express =require('express')
const { postuser, getuser, putuser, deleteuser, getuserbyid, getusersort, loginuser } = require('../controller/user.controller')
const router =express.Router()
// login
router.post('/login/user',loginuser)

// signup
router.post('/user',postuser)

// user
router.get('/user',getuser)
router.get('/user/sort',getusersort)
router.get('/user/:id',getuserbyid)
router.put('/user/:id',putuser)
router.delete('/user/:id',deleteuser)

module.exports =router