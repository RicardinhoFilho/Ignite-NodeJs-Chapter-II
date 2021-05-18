import { CategoryRepository } from "../repositories/CategoryRepository";

interface IRequest {
  description: string;
  name: string;
}

export class CreateCategoryService {
    
    constructor(private categoryRepository: CategoryRepository){
    }

  execute({ description, name }: IRequest) {
    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error(`Category ${name} already exists!`);
    }
    this.categoryRepository.create({ name, description });
  }
}
