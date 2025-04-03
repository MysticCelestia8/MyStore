const products = [  
    {  
      id: 1,  
      product_name: "Apple",  
      price: 150,  
      image: "Apples.jpg"  
    },  
    {  
      id: 2,  
      product_name: "Pineapple",  
      price: 75,  
      image: "Pineapple.jpg"  
    },  
    {  
      id: 3,  
      product_name: "Orange",  
      price: 120,  
      image: "Orange.jpg"  
    },  
    {  
      id: 4,  
      product_name: "Dragon Fruit",  
      price: 450,  
      image: "Dragon Fruit.jpg"  
    },  
    {  
      id: 5,  
      product_name: "Strawberry",  
      price: 300,  
      image: "Strawberry.jpg"  
    }  
  ];  

exports.renderProducts = (req,res)=>{
    res.render("home" ,{products:products});
}
exports.renderAddProduct = (req,res)=>{
    res.render("addProduct")
}
exports.renderEditProduct = (req,res)=>{
    res.render(
      "editProduct",
      {
        product : products[--req.params.id]
      }
    )
}