import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Producto } from 'src/app/clases/producto';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.scss']
})
export class AltaProductoComponent implements OnInit {

  miProducto:Producto; 
  forma : FormGroup;
  mensaje : string='';

  constructor(private fb :FormBuilder, private firebase : FirebaseService) 
  {
    this.miProducto=new Producto();
    this.forma = this.fb.group({
      'codigo':['',[Validators.required]],
      'descripcion':['',[Validators.required]],
      'precio':['',[Validators.required, Validators.min(1)]],
      'stock':['',[Validators.required, Validators.min(1)]],
      'comestible':['false'],
      
    })
  }

  ngOnInit(): void {
  }

  padreRecibeEventoPais(pais:any){
    this.miProducto.paisDeOrigen = pais;
  }

  crearProductoyAgregarAColeccion()
  {
    this.miProducto.codigo = this.forma.value.codigo;
    this.miProducto.descripcion = this.forma.value.descripcion;
    this.miProducto.precio = this.forma.value.precio;
    this.miProducto.stock = this.forma.value.stock;

    this.miProducto.comestible = this.forma.value.comestible;
 
   
    this.firebase.crear('productosCollection',JSON.parse(JSON.stringify(this.miProducto))).then(res=>{
      console.log(res + 'Se agrego a la colec');
    }).catch(err=>{
      console.log(err + 'No se agrego a la colec');
    })
  
  }


}
