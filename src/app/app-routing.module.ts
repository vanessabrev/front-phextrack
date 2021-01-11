import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertBase64Component } from './components/convert-base64/convert-base64.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'base64', component: ConvertBase64Component },
  { path: '**', component: PageNotFoundComponent }, // FIXME: esse path tem a obrigatoriedade de ficar em ultima posição dentro do ROUTES
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
