import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StreamComponent } from './stream/stream.component';
import { ButtonListComponent } from './button-list/button-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StreamComponent,
    ButtonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
