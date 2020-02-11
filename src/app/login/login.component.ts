import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function  init_pluggins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    init_pluggins();

  }
  ingresar(){
    console.log('ingresando');
    this.router.navigate(['/dashboard']);
  }

}
