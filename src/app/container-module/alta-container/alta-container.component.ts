import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Container } from 'src/app/clases/container';

@Component({
  selector: 'app-alta-container',
  templateUrl: './alta-container.component.html',
  styleUrls: ['./alta-container.component.scss']
})
export class AltaContainerComponent implements OnInit {
 //container;

 miContainer : Container = new Container();

 @Output() altaContainerEvento = new EventEmitter<any>();

 
 codigo = new FormControl('', Validators.required);
 marca = new FormControl('', Validators.required);
 capacidad = new FormControl('', Validators.required);

 containerFormGroup = new FormGroup({
   codigo: this.codigo,
   marca: this.marca,
   capacidad: this.capacidad
 });


 constructor() { }

 ngOnInit(): void {


 }


 altaEvent() {
   this.miContainer = this.containerFormGroup.value;
   this.altaContainerEvento.emit(this.miContainer);
   console.log('Se emite el evento alta container');
 }

}
