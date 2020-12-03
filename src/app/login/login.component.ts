import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  private myFormGroup: FormGroup;
  private show = false;

  private notInitializedYet = true;

  readonly fixedUser = "admin";

  constructor() {}

  ngOnInit() {
    this.myFormGroup = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });

    this.notInitializedYet = false;
  }

  public get btnDisabled(): boolean {
    if (this.notInitializedYet) return true;
    return this.myFormGroup.invalid;
  }

  public checkCredentials(): void {
    if (this.btnDisabled) return;

    const { login, password } = this.myFormGroup.controls;

    if (login.value === this.fixedUser && password.value === this.fixedUser) {
      alert("342");
    }
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
