const axios = require('axios');


exports.homeRoutes = (req,res)=>{
    //make a get req to api user
     axios.get('http://localhost:3000/api/users').then(function(resp){
    //    console.log(resp);
    res.render('index.ejs',{users: resp.data});
     }).catch(err =>{
        res.send(err);
     })
    
}

exports.add_user = (req,res)=>{
    res.render('add_user.ejs');
}

exports.update_user = (req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}}).then(userData =>{     //this will get the 'id' data from DB if query 'id' is same!
        res.render('update_user.ejs',{user: userData.data});
    }).catch(err =>{
        res.send(err);
    })
    



}
