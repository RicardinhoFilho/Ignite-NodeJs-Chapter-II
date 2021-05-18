import { CategoryRepository} from "../../repositories/implementations/CategoryRepository";

import{Request, Response} from "express";
export class ListCategoriesUseCase{

    constructor(private categoriesRepository: CategoryRepository){}

    execute(){
        return this.categoriesRepository.list();
    }

}