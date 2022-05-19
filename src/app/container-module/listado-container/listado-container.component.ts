import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Container } from 'src/app/clases/container';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-listado-container',
  templateUrl: './listado-container.component.html',
  styleUrls: ['./listado-container.component.scss']
})
export class ListadoContainerComponent implements OnInit {

  @Output() containerSeleccionadoEvento = new EventEmitter<Container>();
 

  //listadoContainers:Container[]=[new Container()];

  public listaContainers : Container[] = [];

  constructor(private firebase : FirebaseService) 
  { 
    
  }

  ngOnInit(): void {
    //Suscribirse al observable de la coleccion, cada vez que haya un cambio te va a enviar un evento con todos los datos de la base ("data")
    this.firebase.obtenerTodos('containersCollection').subscribe(data=>{
      //borro la lista antes de volverla a cargar con los datos nuevos
      this.listaContainers = []

      //por cada dato "container" que viene de firebase creo un objeto container y lo agrego a la lista que voy a mostrar en el html
      data.forEach(x => {
        let container = new Container()
        container.codigo = x.codigo
        container.capacidad = x.capacidad
        container.marca = x.marca 
        container.id = x.id;

        this.listaContainers.push(container)
      })
    })  


  }

  lanzarEventoContainerSeleccionado(container:Container){
    // console.log(container);
    this.containerSeleccionadoEvento.emit(container);
    console.log('se lanza evento click del container seleccionado')
  }

}
