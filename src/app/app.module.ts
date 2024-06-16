import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { Component3Component } from "./component3/component3.component";
import { Component1Component } from "./component1/component1.component";

import { OrderByPipe } from './filter.pipe';

const routes: Routes = [
  { path: "", redirectTo: "/first", pathMatch: "full" },
  { path: "first", component: Component1Component },
  { path: "second", component: HelloComponent },
  { path: "third", component: Component3Component }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    Component3Component,
    Component1Component,
    OrderByPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
