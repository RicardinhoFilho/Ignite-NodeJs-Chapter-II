import { CategoryRepository} from "../../repositories/CategoryRepository";

import{Request, Response} from "express";
export class ListCategoriesUseCase{

    constructor(private categoriesRepository: CategoryRepository){}

    execute(){
        return this.categoriesRepository.list();
    }

}