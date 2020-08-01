const express = require('express');
const ProductData = require('./src/model/Productdata');
const cors = require('cors');
const Userdata = require('./src/model/Userdata');

var app = new express();
app.use(cors());
app.use(express.json());

app.get('/products', function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    ProductData.find()
        .then(function(products){
            res.send(products);
        });
})

app.post('/insert', function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var product = {
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl
    };
    var product = new ProductData(product);
    product.save();
    res.end();
})

app.put('/edit',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var product = {
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl
    };
    ProductData.findByIdAndUpdate(req.body.product._id,{$set:product},(err,doc)=>{
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error");
        }
    })
})

app.delete('/delete/:id',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.params.id);
    ProductData.findByIdAndDelete(req.params.id,(err,doc)=>{
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error");
        }
    })
})

app.post('/users/login',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    var email = req.body.user.email;
    var password = req.body.user.password;
    Userdata.findOne({email:email},function(err,user){
        if (err) {
            console.log("err ",err);
        } else {
            if (!user) {
                res.status(401).send("Wrong email");
            } else if (user.password!==password) {
                res.status(401).send("Wrong password");
            } else {
                res.status(200).send("Welcome");
            }
        }
    });
})

app.post('/users/insert',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    var item ={
        first_name: req.body.user.firstName,
        last_name: req.body.user.lastName,
        email: req.body.user.email,
        password: req.body.user.password
    };
    var newuser = new Userdata(item);
    newuser.save();
    res.send('"Node-Express server: User added to database"');
})

app.listen(3000, function() {
    console.log('Listening to port 3000');
})