import { Component, VERSION } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  title = "angular-material-tab-router";
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: "Activity 1",
        link: "./first",
        index: 0
      },
      {
        label: "Activity 2",
        link: "./second",
        index: 1
      },
      {
        label: "Activity 3",
        link: "./third",
        index: 2
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find(tab => tab.link === "." + this.router.url)
      );
    });
  }
}
