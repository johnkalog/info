import { Component, Input, OnInit } from "@angular/core";
import { Contact } from "../contact.class";

@Component({
  selector: "app-list-items",
  templateUrl: "./list-items.component.html",
  styleUrls: ["./list-items.component.css"],
})
export class ListItemsComponent implements OnInit {
  @Input() values: Contact;
  constructor() {}

  ngOnInit() {}

  get items() {
    return Object.keys(this.values).map((key) => ({
      key,
      value: this.values[key],
    }));
  }
}
