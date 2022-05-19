import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Container } from 'src/app/clases/container';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-eliminar-container',
  templateUrl: './eliminar-container.component.html',
  styleUrls: ['./eliminar-container.component.scss']
})
export class EliminarContainerComponent implements OnInit {

  @Input() containerRecibidoEliminar : Container = new Container();
  @Output() containerEliminadoEvent = new EventEmitter<string>();

  constructor(private firebase : FirebaseService) { }

  ngOnInit(): void {
  }



  borrar()
  {
    console.log("borrar id", this.containerRecibidoEliminar.id)
    this.firebase.borrar("containersCollection", this.containerRecibidoEliminar.id).then(res=>{
      console.log('Se pudo eliminar');
    })
    this.containerRecibidoEliminar = new Container()
    this.containerEliminadoEvent.emit(this.containerRecibidoEliminar.id)
  }

}
