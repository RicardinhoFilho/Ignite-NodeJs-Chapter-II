import { ISpecificationsRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpacificationService {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationRepository.findByName(name);
    if (specificationAlreadyExists){
      throw new Error("Specification already exists!");
    }

    this.specificationRepository.create({
      name,description,
    });
  }
}