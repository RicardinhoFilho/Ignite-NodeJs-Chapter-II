import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpacificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();
const specificationsRepository = new SpecificationRepository();

specificationRoutes.post("/", (req, res) => {
  try {
    const { name, description } = req.body;
    const createSpecificationService = new CreateSpacificationService(
      specificationsRepository
    );

    createSpecificationService.execute({ name, description });

    return res.status(201).json({});
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
});

export { specificationRoutes };
