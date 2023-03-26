import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { DstComponent } from './dst/dst.component';
import { StageComponent } from './stage/stage.component';
import { TransportComponent } from './transport/transport.component';

const routes: Routes = [
  {path: "dst",component :DstComponent},
  {path: "document",component :DocumentsComponent},
  {path: "stage",component:StageComponent},
  {path:"transport",component:TransportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
