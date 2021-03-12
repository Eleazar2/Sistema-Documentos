import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserPersonal } from '../interfaces/personal';
import { UserAdmin } from '../interfaces/user-admin';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { delay } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient,private jwtHelper: JwtHelperService) { }

  ///Login Personal
  singinP(user: UserPersonal){
    return this.http.post<UserPersonal>(`${this.url}/personal/login`, user);
  }

  //Login Admin
  singinA(user: UserAdmin){
    return this.http.post<UserAdmin>(`${this.url}/admin/login`, user);
  }

  //
  logout() {
   return localStorage.removeItem('token');
  }

 
  isAuth():boolean{
    const token = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }

  noLogin():boolean{
    const token = localStorage.getItem('token');
    if(localStorage.getItem('toke') || this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    return false;
  }


///-----------Personal----------------
getAllPersonal() {
  return this.http.get<UserPersonal[]>(`${this.url}/personal/`)
  .pipe(
    delay(2500)
    );
}

getIdPersonal(id: UserPersonal) {
  return this.http.get(`${this.url}/personal/` + id);
}

crearPersonal(personal: UserPersonal) {
  return this.http.post(`${this.url}/personal/registrar`, personal);
}
cambiarPassword(personal:UserPersonal){
  return this.http.post(`${this.url}/personal/change-password`,personal);
}

updatePersonal(id, dato: UserPersonal) {
  return this.http.put(`${this.url}/personal/update/` + id, dato);
}

deletePersonal(id: UserPersonal) {
  return this.http.delete(`${this.url}/personal/delete/` + id);
}

//---------------UserAdmin--------------
getAllUserAdmin() {
  return this.http.get<UserAdmin[]>(`${this.url}/admin/`);
}

getIdUserAdmin(id: UserAdmin) {
  return this.http.get(`${this.url}/admin/`+id);
}
getPerfil(){
  return this.http.get<UserAdmin>(`${this.url}/admin/perfil`);
}

crearUserAdmin(dato: UserAdmin): Observable<UserAdmin> {
  return this.http.post<UserAdmin>(`${this.url}/admin/registrar`, dato);
}

updataUserAdmin(id, dato: UserAdmin) {
  return this.http.put(`${this.url}/admin/update/` + id, dato);
}

deleteUserAdmin(id: UserAdmin) {
  return this.http.delete(`${this.url}/admin/delete/` + id);
}
cambiarPassword(){
  
}

}
