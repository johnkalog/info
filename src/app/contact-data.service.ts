import { Injectable } from "@angular/core";
import { Contact } from "./contact.class";
import { mock } from "./mockContact";

@Injectable({
  providedIn: "root",
})
export class ContactDataService {
  data: Contact;

  constructor() {
    this.data = mock as Contact;
  }
}
