import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerBeersCartComponent } from './container-beers-cart/container-beers-cart.component';
import { PhotosComponent } from './photos/photos.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {path : 'beers', component: ContainerBeersCartComponent},
  {path : 'sales', component: SalesComponent},
  {path : 'photos', component: PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
