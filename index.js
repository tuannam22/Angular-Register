var Book = require("./Models/Book");

app.post("/api/register", function(req, res){

    // check trung username
    User.findOne({username:req.body.username}, function(err, item){
        if(item != null){
            res.json({kq:0, err:"Trung username"});
        }else{
            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                if(!err){
                    var newUser = new User({
                        username : req.body.username,
                        password : hash,
                        name: req.body.name,
                        email: req.body.email,
                        random: "",
                        active: 0
                    });
                    // res.json(newUser);
                    newUser.save(function(err){
                        if(err){
                            res.json({kq:0, err:"Save new User loi" });
                        }else{
                            res.json({kq:1, err:"Save thanh cong!"});
                        }
                    });
                }else{
                    res.json({kq:0, err:"Tao new user err"+ err});
                }        
            });
        }
    });    
});
