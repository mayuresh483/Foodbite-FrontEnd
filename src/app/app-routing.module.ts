import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { FooddetailsComponent } from './pages/fooddetails/fooddetails.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchfood', component:HomeComponent},
  {path:'tag/:foodTag', component:HomeComponent},
  {path:'food/:id', component:FooddetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
