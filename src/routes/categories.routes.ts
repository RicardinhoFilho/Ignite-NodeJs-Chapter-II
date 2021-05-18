import { Router } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";
import { CategoryRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const category = new CategoryRepository();
const createCategoryService = new CreateCategoryService(category);

categoriesRoutes.post("/", (req, res) => {
try{
    const { name, description } = req.body;
 
    createCategoryService.execute({name,description});
    return res.status(201).json(category);
}catch(err){
    return res.status(400).json({error: err});
}
  
});

categoriesRoutes.get("/", (req, res) => {
  const categories = category.list();
  return res.status(200).json({ categories });
});

export { categoriesRoutes };
