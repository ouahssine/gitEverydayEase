import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { DstComponent } from './dst/dst.component';
import { StageComponent } from './stage/stage.component';
import { TransportComponent } from './transport/transport.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnecteComponent } from './connecte/connecte.component';
import { HttpClientModule } from '@angular/common/http' ;
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    DstComponent,
    StageComponent,
    TransportComponent,
    InscriptionComponent,
    ConnecteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
