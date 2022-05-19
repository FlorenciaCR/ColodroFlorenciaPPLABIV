import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../servicios/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public firebase : FirebaseService,private router : Router) { }

  ngOnInit(): void {
  }
  
  salirDesloguearse()
  {
    this.firebase.logOut();
    this.router.navigate(['bienvenida']);
  }

  irALogin()
  {
    this.router.navigate(['login']);
  }

}
