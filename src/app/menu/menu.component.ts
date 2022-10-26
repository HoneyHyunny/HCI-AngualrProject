import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  router: string;

  constructor(private _router: Router) {
    this.router = "/detail"
   }

  ngOnInit(): void {



  }

}
