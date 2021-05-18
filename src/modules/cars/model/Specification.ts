import { v4 as uuid } from "uuid";
export class Specification {
  id?: string;
  name: string;
  description: string;
  created_at?: Date;

  constructor({ name, description, created_at }: Specification) {
    if (!this.id) {
      this.id = uuid();
    }

    if (!this.created_at) {
      this.created_at = new Date();
    } else {
      this.created_at = created_at;
    }

    this.name = name;
    this.description = description;
  }
}
