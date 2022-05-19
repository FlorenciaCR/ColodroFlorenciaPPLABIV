import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from 'src/app/servicios/github.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  datosGitHub : any=false;
  constructor(private github : GithubService, private router : Router) { }

  ngOnInit(): void {
    this.github.getGithubUser().subscribe(datos=>{
      console.log(datos);
      this.datosGitHub = datos;
  
   })
  }

}
