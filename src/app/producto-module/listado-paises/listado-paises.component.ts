import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.scss']
})
export class ListadoPaisesComponent implements OnInit {

  listaPaisesapi:any=[]
  @Output() paisSeleccionadoEvento = new EventEmitter<any>();
  constructor(private apiService : ApiService, private firebase : FirebaseService) { }

  ngOnInit(): void {
    this.apiService.paisesRegion().subscribe(data=>{
      this.listaPaisesapi = data;
      console.log(data)
    })
  }

  lanzarEventoPaisSeleccionado(pais:any){
    // console.log(pais);
    this.paisSeleccionadoEvento.emit(pais);
  }

}
