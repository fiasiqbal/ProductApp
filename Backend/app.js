const express = require('express');
const ProductData = require('./src/model/Productdata');
const cors = require('cors');

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
        description : req.body.product.decription,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl
    };
    var product = new ProductData(product);
    product.save();
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
        description : req.body.product.decription,
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

app.post('/login',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

})

app.listen(3000, function() {
    console.log('Listening to port 3000');
})