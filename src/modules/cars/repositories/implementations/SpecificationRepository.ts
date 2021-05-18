import { Specification } from "../../model/Specification";
import {
  ICreateSpecification,
  ISpecificationsRepository,
} from "../interfaces/ISpecificationRepository";

export class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecification): void {
    const specification = new Specification({ name, description });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }
}
