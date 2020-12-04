import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-modal-question",
  templateUrl: "./modal-question.component.html",
  styleUrls: ["./modal-question.component.css"],
})
export class ModalQuestionComponent implements OnInit {
  @Output()
  save: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  public onCloseClick(): void {
    this.save.emit(false);
  }

  public onSavedClick(): void {
    this.save.emit(true);
  }
}
