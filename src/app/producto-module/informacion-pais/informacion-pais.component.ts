import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-pais',
  templateUrl: './informacion-pais.component.html',
  styleUrls: ['./informacion-pais.component.scss']
})
export class InformacionPaisComponent implements OnInit {

  @Input() paisSeleccionadoMostrar : any;
  constructor() { }

  ngOnInit(): void {
  }

}
