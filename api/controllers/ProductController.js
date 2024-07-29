const ProductModule = require("../modules/ProductModules")
const createProduct = async (req, res) =>{
    try{
const { ProductName, ProductPrice ,Color ,image} = req.body
const newProduct = await ProductModule.create({
    ProductName:ProductName,
    ProductPrice: ProductPrice,
    Color: Color,
   image: image,
})
res.status(200).json({
    product:newProduct
})
    }
catch (error) {
    res.status(200).json({
        error: error.message
    })



}
}

const DeleteProduct = async (req, res) => {
    try {
        const { ProductName} = req.body

        const response = await ProductModule.deleteOne({ProductName:ProductName})
        res.status(200).json({
            response:response,
        })
    }
    catch (error) {
        res.status(200).json({
            error: error.message
        })
    }
}
const  findAllProduct  = async (req, res) => {
    try {
        const AllProduct = await ProductModule.find({})
        res.status(200).json({
            Product:AllProduct,
        })
    }
    catch (error) {
        res.status(200).json({
            error: error.message
        })
    }
}
 
module.exports={
    createProduct,
    DeleteProduct,
    findAllProduct

}