import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu.component";
import { SpecialComponent } from "./special/special.component";
import { SidesComponent } from "./sides/sides.component";
import { PizzaComponent } from "./pizza/pizza.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MenuRoutingModule } from "./menu-routing.module";

@NgModule({
    declarations:[
        MenuComponent,
        SpecialComponent,
        SidesComponent,
        PizzaComponent,
        SpecialComponent],
    imports : [
       CommonModule,
       RouterModule, 
       FormsModule,
       MenuRoutingModule,
       ReactiveFormsModule,
    ]
})

export class MenusModule{}