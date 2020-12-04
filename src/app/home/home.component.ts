import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { ListUsersComponent } from "../list-users/list-users.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  @ViewChild(ListUsersComponent) usersComponent: ListUsersComponent;
  cancel: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  public onCancelClick(): void {
    this.usersComponent.noChangeUsers();
  }

  public onSaveClick(saveFlag: boolean): void {
    this.usersComponent.changeUsers(saveFlag);
  }
}
