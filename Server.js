const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json())

const database={
    users: [
        {
            id:'123',
            name:'joe',
            email:'Joe123@gmail.com',
            password:'doejoe',
            cpassword:'doejoe',
            joined: new Date()
        },
        {
            id:'124',
            name:'jay',
            email:'Jay123@gmail.com',
            password:'doejay',
            cpassword:'doejay',
            joined: new Date()
        },
    ]
}

app.get('/',(req, res) => { 
    res.send(database.users);
})

app.post('/signin', (req,res) =>{
    if(req.body.email === database.users[0].email && 
        req.body.password === database.users[0].password){
            res.json('sucess');
        }else{
            res.status(400).json('error logging in')
        }
    res.json("working")
})

app.post('/register', (req,res) => {
    const {email, name, password, cpassword} = req.body;
    database.users.push({
        id:'125',
        name: name,
        email:email,
        password:password,
        cpassword:cpassword,
        joined: new Date()
    })
    res.json(database.users[database.users.length-1]);
})

app.listen(3000, ()=>{
    console.log('app is running on port 3000')
})