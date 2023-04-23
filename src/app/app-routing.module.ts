import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { DstComponent } from './dst/dst.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { StageComponent } from './stage/stage.component';
import { TransportComponent } from './transport/transport.component';
import { ConnecteComponent } from './connecte/connecte.component';

const routes: Routes = [
<<<<<<< Updated upstream
=======
  {path: "",component :ConnecteComponent},
  {path: "connect",component :ConnecteComponent},
  {path: "inscription",component :InscriptionComponent},
>>>>>>> Stashed changes
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
