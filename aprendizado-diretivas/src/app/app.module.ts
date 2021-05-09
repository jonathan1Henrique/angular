import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchCaseComponent } from './components/switch-case/switch-case.component';
import { NgClassDirectiveComponent } from './components/ng-class-directive/ng-class-directive.component';
import { NgStyleDirectiveComponent } from './components/ng-style-directive/ng-style-directive.component';
import { FormsModule } from '@angular/forms';
import { NgContentDirectiveComponent } from './components/ng-content-directive/ng-content-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchCaseComponent,
    NgClassDirectiveComponent,
    NgStyleDirectiveComponent,
    NgContentDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
