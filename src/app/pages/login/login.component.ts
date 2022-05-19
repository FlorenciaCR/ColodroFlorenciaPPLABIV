import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = {
    password:'',
    email:''
  }
  mensaje : string='';


  constructor(private router : Router, private firebase : FirebaseService) { }

  ngOnInit(): void {
  }

  loguearUsuario()
  {
    let resultado = this.firebase.logIn(this.usuario.email,this.usuario.password)
    resultado.then(data=>{
      if(data.status)
      {
        this.router.navigate(['producto/alta']);
        console.log('salio bien');
      }
    })
  }

  entrarEmpleado()
  {
    this.usuario.email = 'empleado@empleado.com';
    this.usuario.password = '123456';
  }

  entrarAdmin()
  {
    this.usuario.email = 'admin@admin.com';
    this.usuario.password = '123456';
  }

}
