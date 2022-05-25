import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  estaLogueado : boolean=false;
  esAdmin : boolean =false;

  constructor(private angularfireAuth : AngularFireAuth, private router : Router, private angularfireStore : AngularFirestore) { 
    this.getCurrentUser().subscribe(res=>{
      if(res!=null){
         this.esAdmin=this.esAdministrador(res)
         this.estaLogueado=true
      }else{
       this.estaLogueado=false
       this.esAdmin=false;
      }
    })
  }

  esAdministrador(usuario:any)
{
    return usuario && usuario.email == 'admin@admin.com';
}

getCurrentUser()
{
  return this.angularfireAuth.authState;
}

  async logIn(email: string, contrasenia : string)
  {
    let objRes = {status:false,error:''};
    try{
      await this.angularfireAuth.signInWithEmailAndPassword(email,contrasenia).then(data=>{
        if(data.user)
        {
          objRes.status=true;
        }
      })
    }catch(error)
    {
      objRes.error=`${error}`;
    }
     return objRes;
  }



logOut()
{
  this.angularfireAuth.signOut();
}


async crear(nombreColeccion : string, data : string)
{
   return await this.angularfireStore.collection<any>(nombreColeccion).add(data);
}


obtenerTodos(nombreColeccion : string){
  let collection = this.angularfireStore.collection<any>(nombreColeccion)
  return collection.valueChanges({idField: 'id'});
}

async borrar(nombreColeccion :string, id: any) {
  try {
    return await this.angularfireStore.collection(nombreColeccion).doc(id).delete();
  } catch (error) {
    console.log("error en delete ", error)
  }
}

async modificar(collection: string, id: any, dato: any) {
  try {
    return await this.angularfireStore.collection(collection).doc(id).set(dato);
  } catch (error) {
    console.log("error en update ", error)
  }
}



}


