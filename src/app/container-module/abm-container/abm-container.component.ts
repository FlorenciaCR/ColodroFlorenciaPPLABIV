import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/clases/container';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-abm-container',
  templateUrl: './abm-container.component.html',
  styleUrls: ['./abm-container.component.scss']
})
export class AbmContainerComponent implements OnInit {

  
  containerSeleccionadoModificar :Container= new Container();
  containerSeleccionadoEliminar :Container= new Container();
  
  constructor(private firebase : FirebaseService) { }

  ngOnInit(): void {
  }

  //recibe el evento y da de alta el container recibido
  recibeEventoAltayAgrega(container : Container)
  {
    this.firebase.crear('containersCollection',JSON.parse(JSON.stringify(container))).then(res=>{
      console.log('se supone salio bien el alta container en abmcont');
    }).catch(err=>{
      console.log('salio mal el alta conteiner en abmcont xd');
    })
    this.limpiarHijos()
  }

  //Recibe el container selecc en listado, para que modificar lo reciba como input
  recibeEventoContainerSelecc(container:Container)
  {
    this.containerSeleccionadoModificar = JSON.parse(JSON.stringify(container));
    this.containerSeleccionadoEliminar = JSON.parse(JSON.stringify(container));
  }

  limpiarHijos(){
    this.containerSeleccionadoModificar = new Container()
    this.containerSeleccionadoEliminar = new Container()
  }

}
