const mongoosh =require('mongoose')
require('dotenv').config()
// console.log(process.env.MONGOURL);
const dns =require('dns')
dns.setServers([
    '8.8.8.8',
    '1.1.1.1'
])
mongoosh.set("strictQuery", true);
mongoosh.connect(process.env.MONGOURL)
.then(()=>console.log('db connected'))
.catch((err)=>console.log(err))