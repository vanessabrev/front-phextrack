import { Address } from "./address.model";

export class Contacts {
  address: Array<Address>;
  phones: Array<{ phone: string }>;
  emails: Array<{ email: string }>;
}
