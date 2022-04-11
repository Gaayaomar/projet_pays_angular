import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentsComponent } from './components/continents/continents.component';
import { Liste_paysComponent } from './components/liste_pays/liste_pays.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{path: '', component: HomeComponent},
                        {path: 'home', component: HomeComponent},
                        {path: 'liste_pays', component: Liste_paysComponent},
                        {path: 'pays/:continent', component: Liste_paysComponent},
                        {path: 'liste_pays/details/:name', component: DetailsComponent},

                        {path: 'liste_pays/:name', component: Liste_paysComponent},
                        {path: 'continents', component: ContinentsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
