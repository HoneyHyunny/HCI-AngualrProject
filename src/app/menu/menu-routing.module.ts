import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailPeperoniComponent } from "./pizza/detail/pepperoni/detailPepperoni.component";
import { FamilyDealComponent } from "./family-deal/family-deal.component";
import { MenuComponent } from "./menu.component";
import { PizzaComponent } from "./pizza/pizza.component";
import { SidesComponent } from "./sides/sides.component";
import { SpecialComponent } from "./special/special.component";
import { DetailPopularComponent } from "./pizza/detail/mostPopular/detailPopular.component";


const routes: Routes = [
    {
      path : '', component : MenuComponent,
      children : [
        {path : 'pizza', component : PizzaComponent},
        {path : 'special', component : SpecialComponent},
        {path : 'sides', component : SidesComponent},
        {path : 'family-deal', component : FamilyDealComponent},
        {path : 'detail-pepperoni', component : DetailPeperoniComponent},
        {path : 'detail-popular', component : DetailPopularComponent},
      ]
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]

})
export class MenuRoutingModule{}