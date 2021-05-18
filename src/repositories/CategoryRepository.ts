import { Category } from "../model/Category";
import { Request, Response } from "express";

interface ICreateCategory {
  name: string;
  description: string;
}
export class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreateCategory): void {
    const category = new Category({ name, description });

    this.categories.push(category);
  }

  list():Category[]{
    return this.categories;
  }

  findByName(name:string):Category|undefined{
      const category = this.categories.find(category => category.name === name);
      return category;
  }
}
