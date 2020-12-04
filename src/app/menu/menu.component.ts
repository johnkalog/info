import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuActionService } from "../menu-action.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  action: boolean;
  constructor(private menuAction: MenuActionService, private router: Router) {}

  ngOnInit() {
    this.menuAction.action.subscribe((value: boolean) => {
      if (value) this.router.navigateByUrl("/home");
      this.action = value;
    });
  }
}
