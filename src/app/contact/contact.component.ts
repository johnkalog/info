import { Component, OnInit } from "@angular/core";
import { ContactDataService } from "../contact-data.service";
import { Contact } from "../contact.class";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  data: Contact;
  constructor(private ContactData: ContactDataService) {}

  ngOnInit() {
    this.data = this.ContactData.data;
  }
}
