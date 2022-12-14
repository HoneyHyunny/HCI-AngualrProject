import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MapComponent } from './location/map/map.component';
import { CouponComponent } from './coupon/coupon.component';

const routes: Routes = [
  {path: "", component : MainComponent},
  {path: "menu", loadChildren: () => import('./menu/menu.module').then(menu => menu.MenusModule)},
  {path: "location", component : MapComponent},
  {path: "coupon", component : CouponComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
