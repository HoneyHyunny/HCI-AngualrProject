import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu.component";
import { SpecialComponent } from "./special/special.component";
import { SidesComponent } from "./sides/sides.component";
import { PizzaComponent } from "./pizza/pizza.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MenuRoutingModule } from "./menu-routing.module";
import { DetailComponent } from './detail/detail.component';

@NgModule({
    declarations:[
        MenuComponent,
        SpecialComponent,
        SidesComponent,
        PizzaComponent,
        SpecialComponent,
        DetailComponent],
    imports : [
       CommonModule,
       RouterModule, 
       FormsModule,
       MenuRoutingModule,
       ReactiveFormsModule,
    ]
})

export class MenusModule{}