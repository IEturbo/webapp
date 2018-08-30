import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.less"]
})
export class ContactComponent implements OnInit {
  isShow = false;
  constructor() {}

  ngOnInit() {}

  showIcon() {
    this.isShow = ! this.isShow;
  }
}
