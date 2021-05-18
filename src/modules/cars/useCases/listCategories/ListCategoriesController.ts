import {Request, Response} from "express";

import{ListCategoriesUseCase} from "./ListCategoriesUseCase";

export class ListCategoriesController{
    constructor(private listCategories:ListCategoriesUseCase){}

    handle(req:Request,res:Response){
        try{
            const all = this.listCategories.execute();

            return res.json(all);
        }catch(error){
            res.status(400).json({error:error.message});
        }
        
    }
}