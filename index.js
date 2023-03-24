const express=require('express')
var cors=require('cors')
const app=express()
const port=3000

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

// app.get('/search?:id',(req,res)=>{
    // const q=req.params
    // console.log(q.id)
    // const q=req.query   // 'key=value&'after '?'
    // console.log(q.q)
    // console.log(q.surname)
    // console.log(q.age)  

    // res.json({'userid':q.q})
// })

app.get('/sound/:name',(req,res)=>{
    const {name}=req.params
    
    if(name=="dog"){
        res.send({'sound':'bowwow'})        
    }else if(name=="cat"){
        res.send({'sound':'meow'})        
    }else if(name=="pig"){
        res.send({'sound':'oink'})        
    }else{
        res.send({'sound':'unknown'})
    }    
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})