import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomManipulationComponent } from './dom-manipulation/dom-manipulation.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { FormsModule } from '@angular/forms';
import { DomChildComponent } from './dom-child/dom-child.component';

@NgModule({
  declarations: [
    AppComponent,
    DomManipulationComponent,
    ContentProjectionComponent,
    DomChildComponent
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
