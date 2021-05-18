import { ISpecificationsRepository } from "../../repositories/interfaces/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpacificationUseCase {
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
