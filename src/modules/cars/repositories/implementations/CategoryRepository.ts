import { Category } from "../../model/Category";
import { Request, Response } from "express";

interface ICreateCategory {
  name: string;
  description: string;
}
export class CategoryRepository {
  private categories: Category[];

  private static INSTANCE: CategoryRepository;

  constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }

    return CategoryRepository.INSTANCE;
  }

  create({ description, name }: ICreateCategory): void {
    const category = new Category({ name, description });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}
