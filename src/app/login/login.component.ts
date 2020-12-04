import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MenuActionService } from "../menu-action.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @Output() changeMenu: EventEmitter<boolean> = new EventEmitter();
  private myFormGroup: FormGroup;
  private show = false;

  private notInitializedYet = true;
  private validUser = false;

  readonly fixedUser = "admin";

  constructor(private menuAction: MenuActionService) {}

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

    this.validUser =
      login.value === this.fixedUser && password.value === this.fixedUser;
  }

  public onBtnClick(): void {
    this.menuAction.action.next(this.validUser);
  }

  public showTheHint(): void {
    this.show = !this.show;
  }

  public get showOrHide(): string {
    return `${this.show ? "Hide" : "Show"} hint`;
  }
}
