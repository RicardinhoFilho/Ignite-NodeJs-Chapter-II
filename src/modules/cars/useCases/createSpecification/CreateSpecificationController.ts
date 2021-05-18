import {Request, Response} from "express";
import { CreateSpacificationUseCase } from "./CreateSpecificationUseCase";
export class CreateSpacificationController{

    constructor(private createSpecificationUseCase: CreateSpacificationUseCase){}
    handle(req:Request, res:Response){
        try {
            const { name, description } = req.body;
            
            this.createSpecificationUseCase.execute({ name, description });
        
            return res.status(201).send();
          } catch (error) {
            return res.status(400).json({error: error.message});
          }
    }

}