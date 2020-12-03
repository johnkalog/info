import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  private formGroup: FormGroup;
  private show = false;

  constructor() {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  public get btnDisabled(): boolean {
    return this.formGroup.invalid;
  }

  public onBtnClick(): void {
    alert("ety");
  }

  public showTheHint(): void {
    this.show = !this.show;
  }

  public get showOrHide(): string {
    return `${this.show ? "Hide" : "Show"} hint`;
  }
}
