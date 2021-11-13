const User = require('../schema/user');

exports.createuser = (req,res) =>{ 
            
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    })
    
    user.save()
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log('sorry!!....User Was Not Created');
        })
}

exports.getuser = (req,res) => {
    User.find()
        .then((data) =>{
            res.send(data);
        })
        .catch((error)=>{
            console.log('Sorry No Data Found');
        })
}
        
exports.getuserbyid = (req,res) => { 
    var user_name = req.params.name;
    User.findOne({name:user_name})
        .then((data) => {
            res.send(data);
        })
        .catch((error)=>{
            console.log('Sorry No User Found');  
            console.log(error); 
        })
}

exports.updateuser = (req,res) => {
    var user_name = req.params.name;
    const{name,username} = req.body;
    User.findOneAndUpdate({name:user_name},{name,username})
        .then((data)=>{

            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        })
}

exports.deleteuser = (req,res) => {
    var user_name = req.params.name;
                
    User.deleteMany({name:user_name})
        .then((data)=>{
            res.send(data);
        })
        .catch((error)=>{
            console.log(error);
        })        
}