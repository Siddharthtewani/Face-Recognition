const express=require('express');
const bodyParser = require('body-parser');
const app=express();
const bcrypt=require('bcrypt-nodejs');
const cors=require('cors');

app.use(bodyParser.json());
app.use(cors());
const database={
    user:[
        {
            id:1,
            name:'siddharth',
            email:'tewani@gmail.com',
            password:'hello',
            entries:0,
            joined:new Date()
        },
        {
            id:2,
            name:'vijay',
            email:'vtewani@gmail.com',
            password:'hipassword',
            entries:0,
            joined:new Date()
        }
    ],
    login :[ 
        {
        id:'1',
        hash:'',
        email: 'tewani@gmail.com'
    }

    ]
}

app.get('/',(req,res)=>{
    
    res.send(database.user)
})  




    app.post('/register',(req,res)=>{
    const {email,name,password}=req.body;
    
      
   
        database.user.push({
            id:'3',
            name:name,
            email:email,
            password:password,
            entries:0,
            joined:new Date()
        })
        res.json(database.user[database.user.length-1])
    })





   app.get('/profile/:id',(req,res)=>{
   let found='false';  
   const {id}=req.params;
  
   database.user.forEach(user=>{
    
    if(user.id==id)
    {
     found='true';
     return  res.json(user);
    }    
    })
    if(!found)
    {
     res.status(404).json("error");
    }
    })

    




    app.put('/image',(req,res)=>{
        let found='false';  
        const {id}=req.body;
       
        database.user.forEach(user=>{
         
         if(user.id==id)
         {
          found='true';
          user.entries=user.entries+1
          return  res.json(user);
         }    
         })
         if(!found)
         {
          res.status(404).json("error");
         }
    })


  



    app.post('/signin',(req,res)=>{    
    
    if(req.body.email===database.user[0].email){
       res.send("SUCCESS")
    }
    else{
        res.send("Failed")
    }
    
    })

app.listen(3000, () => console.log(' App listening on port 3000!'))




