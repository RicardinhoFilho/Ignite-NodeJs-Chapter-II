import { Router } from "express";
import { Category } from "../model/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const category = new CategoryRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  if (category.findByName(name)) {
    return res.status(400).json({ error: `Category ${name} already exists!` });
  }
  category.create({ name, description });

  return res.status(201).json(category);
});

categoriesRoutes.get("/", (req, res) => {
  const categories = category.list();
  return res.status(200).json({ categories });
});

export { categoriesRoutes };
