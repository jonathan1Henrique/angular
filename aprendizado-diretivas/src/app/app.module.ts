import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchCaseComponent } from './components/switch-case/switch-case.component';
import { NgClassDirectiveComponent } from './components/ng-class-directive/ng-class-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchCaseComponent,
    NgClassDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
