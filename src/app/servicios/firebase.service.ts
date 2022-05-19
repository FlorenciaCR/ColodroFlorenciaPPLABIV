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

  constructor(private angularfireAuth : AngularFireAuth, private router : Router, private angularfireStore : AngularFirestore) { }


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

getCurrentUser()
{
  return this.angularfireAuth.authState;
}

logOut()
{
  this.angularfireAuth.signOut();
}

esAdministrador(usuario:any)
{
    return usuario && usuario.email == 'admin@admin.com';
}

async crear(nombreColeccion : string, data : string)
{
   return await this.angularfireStore.collection<any>(nombreColeccion).add(data);
}


}


