import { Router } from "express";
import ProductController from "../controllers/product.controller.js";

const productRouter = Router();

// [GET] /api/products/:id?
productRouter.get("/:id?", ProductController.getProducts);

// [GET] /api/products/:category
productRouter.get(
  "/category/:category",
  ProductController.getProductsByCategoryName
);

// [POST] /api/products/
productRouter.post("/", ProductController.createProduct);

// [PUT] /api/products/:id
productRouter.put("/:id", ProductController.updateProduct);

// [DELETE] /api/products/:id
productRouter.delete("/:id", ProductController.deleteProductById);

export default productRouter;
