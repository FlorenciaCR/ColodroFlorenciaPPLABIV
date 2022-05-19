import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Container } from 'src/app/clases/container';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-modificar-container',
  templateUrl: './modificar-container.component.html',
  styleUrls: ['./modificar-container.component.scss']
})
export class ModificarContainerComponent implements OnInit {

  @Input() containerRecibidoModificar : Container = new Container();
  @Output() containerModificadoEvent = new EventEmitter<Container>();

  marca = new FormControl('', Validators.required);
  capacidad = new FormControl('', Validators.required);

  containerFormGroup = new FormGroup({
    marca: this.marca,
    capacidad: this.capacidad
  });
  

  constructor(private firebase : FirebaseService) { }

  ngOnInit(): void {
  }

  modificarContainer()
  {
    //this.containerRecibidoModificar.codigo = this.containerFormGroup.value.codigo;
    this.containerRecibidoModificar.marca = this.containerFormGroup.value.marca;
    this.containerRecibidoModificar.capacidad = this.containerFormGroup.value.capacidad;

    let containerModificado = JSON.parse(JSON.stringify(this.containerRecibidoModificar))

    this.firebase.modificar("containersCollection", this.containerRecibidoModificar.id, containerModificado).then(
      res=>{
        this.containerFormGroup.reset();
      }).catch(err=>{
        console.log('error al modificar.ts')
      })
      this.containerFormGroup.reset();
      this.containerRecibidoModificar = new Container()
      this.containerModificadoEvent.emit(containerModificado)
  }

}
