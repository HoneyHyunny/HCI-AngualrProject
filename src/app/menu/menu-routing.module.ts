import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { FamilyDealComponent } from "./family-deal/family-deal.component";
import { MenuComponent } from "./menu.component";
import { PizzaComponent } from "./pizza/pizza.component";
import { SidesComponent } from "./sides/sides.component";
import { SpecialComponent } from "./special/special.component";


const routes: Routes = [
    {
      path : '', component : MenuComponent,
      children : [
        {path : 'pizza', component : PizzaComponent},
        {path : 'special', component : SpecialComponent},
        {path : 'sides', component : SidesComponent},
        {path : 'family-deal', component : FamilyDealComponent},
        {path : 'detail', component : DetailComponent}
      ]
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]

})
export class MenuRoutingModule{}