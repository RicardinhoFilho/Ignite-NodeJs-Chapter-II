import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpacificationController } from "./CreateSpecificationController";
import { CreateSpacificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpacificationUseCase(specificationRepository);
const createSpecificationController = new CreateSpacificationController(createSpecificationUseCase);

export{createSpecificationController};