import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu.component";
import { SpecialComponent } from "./special/special.component";
import { SidesComponent } from "./sides/sides.component";
import { PizzaComponent } from "./pizza/pizza.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MenuRoutingModule } from "./menu-routing.module";
import { DetailPeperoniComponent } from './pizza/detail/pepperoni/detailPepperoni.component';
import { DetailPopularComponent } from './pizza/detail/mostPopular/detailPopular.component';

@NgModule({
    declarations:[
        MenuComponent,
        SpecialComponent,
        SidesComponent,
        PizzaComponent,
        SpecialComponent,
        DetailPeperoniComponent,
        DetailPopularComponent
    ],
    imports : [
       CommonModule,
       RouterModule, 
       FormsModule,
       MenuRoutingModule,
       ReactiveFormsModule,
    ]
})

export class MenusModule{}