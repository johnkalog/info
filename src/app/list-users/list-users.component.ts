import { Component, OnInit } from "@angular/core";
import { User } from "../user.class";

@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.css"],
})
export class ListUsersComponent implements OnInit {
  private users: User[];
  private usersInitials: User[];
  constructor() {}

  ngOnInit() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        this.users = json.map(
          (el) =>
            ({
              name: el.name,
              username: el.username,
              email: el.email,
              city: el.address.city,
              website: el.website,
            } as User)
        );
        this.usersInitials = [...this.users];
        console.log(this.users);
      });
  }

  public onRemoveClick(index: number): void {
    this.users.splice(index, 1);
  }

  public noChangeUsers(): void {
    this.users = [...this.usersInitials];
  }

  public changeUsers(saveFlag: boolean): void {
    if (saveFlag) this.usersInitials = [...this.users];
  }
}
