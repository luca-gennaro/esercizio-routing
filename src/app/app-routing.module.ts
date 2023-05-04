import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContattoComponent } from './contatti/contatto/contatto.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "chi-siamo", component: ChiSiamoComponent},
  {path: "contatti", component: ContattiComponent, children: [
    {path: ":id", component: ContattoComponent}
  ]},
  {path: "aggiungi-contatto", component: FormComponent},

  {path: "not-found", component: PageNotFoundComponent},
  {path: "**", redirectTo: "not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
