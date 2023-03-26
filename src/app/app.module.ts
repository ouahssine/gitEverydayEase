import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { DstComponent } from './dst/dst.component';
import { StageComponent } from './stage/stage.component';
import { TransportComponent } from './transport/transport.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    DstComponent,
    StageComponent,
    TransportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
