const{ Router} = require("express")
const{createProduct, DeleteProduct,findAllProduct} = require("../controllers/ProductController")
const ProductRouter = Router()
ProductRouter.post("/createProduct",createProduct)
ProductRouter.delete("/DeleteProduct",DeleteProduct)
ProductRouter.get("/findAllProduct",findAllProduct)

module.exports = ProductRouter;

