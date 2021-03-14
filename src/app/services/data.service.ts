import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import { Componente } from '../interfaces/interfaces';
import { Depto, } from '../interfaces/depto';
import { OficioI } from '../interfaces/oficio';
import { RespuestaEnvioOficI, EnvioOficI } from '../interfaces/envio_ofic';
import { EspacioRevisadoI } from '../interfaces/espacio-revisado';
import { ListaVerifcacionI } from '../interfaces/lista-verificacion';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }



  //------------Departamento---------------------

  getAllDepartamento() {
    return this.http.get<Depto[]>(`${this.API_URL}/departamento/`);
  }

  getIdDepartamento(id: Depto) {
    return this.http.get(`${this.API_URL}/departamento/${id}`);
  }

  postDepartamento(dato: Depto) {
    return this.http.post(`${this.API_URL}/departamento/registrar`, dato);
  }

  updateDepartamento(id, dato: Depto) {
    return this.http.put(`${this.API_URL}/departamento/update/${id}`, dato);
  }

  deleteDepartamento(id: Depto) {
    return this.http.delete(`${this.API_URL}/departamento/delete/` + id);
  }
  //////---------------Oficio--------------------------------
  getAllOficio(){
    return this.http.get<OficioI[]>(`${this.API_URL}/oficio`);
  }
  getIdOficio(id){
    return this.http.get(`${this.API_URL}/oficio/`+id);
  }
  crearOficio(dato){
    return this.http.post(`${this.API_URL}/oficio/crear`,dato);
  }
  updateOficio(id,dato){
    return this.http.put(`${this.API_URL}/oficio/update/`+id,dato);
  }
  deleteOficio(id){
    return this.http.delete(`${this.API_URL}/oficio/delete/`+id);
  }
  /////-----------------Lista de verificacion-------------------
  getAllLista_V(){
    return this.http.get<ListaVerifcacionI[]>(`${this.API_URL}/lista`);
  }
  getIdLista_V(id){
    return this.http.get(`${this.API_URL}/lista/`+id);
  }
  getjoinLista(id){
    return this.http.get(`${this.API_URL}/lista/join/`+id);
  }
  crearLista_V(dato){
    return this.http.post(`${this.API_URL}/lista/crear`,dato);
  }
  updateLista_V(id,dato){
    return this.http.put(`${this.API_URL}/lista/update/`+id,dato);
  }
  delateLista_V(id){
    return this.http.delete(`${this.API_URL}/lista/delete/`+id);
  }
  ////----------------------cuerpo lista---------------
  getAllEspacioRV(){
    return this.http.get<EspacioRevisadoI[]>(`${this.API_URL}/cuerpo_lista/`);
  }
  getIdEspacioRV(id){
    return this.http.get(`${this.API_URL}/cuerpo_lista/`+ id);
  }
  crearEspacioRV(dato){
    return this.http.post(`${this.API_URL}/cuerpo_lista/`,dato);
  }
  updateEspacioRV(id,dato){
    return this.http.put(`${this.API_URL}/cuerpo_lista/update/`+ id,dato);
  }
  deleteEspacioRV(id){
    return this.http.delete(`${this.API_URL}/cuerpo_lista/delete/`+ id);
  }
  /////-----------Programa Manto. Preventivo--------------------

  getAllManto_Prv(){
    return this.http.get(`${this.API_URL}/manto_prv/`);
  }
  getIdOManto_Prv(id){
    return this.http.get(`${this.API_URL}/manto_prv/`+id);
  }
  crearManto_Prv(dato){
    return this.http.post(`${this.API_URL}/manto_prv/crear`,dato);
  }
  updateManto_Prv(id,dato){
    return this.http.put(`${this.API_URL}/manto_prv/update`+id,dato);
  }
  delateManto_Prv(id){
    return this.http.delete(`${this.API_URL}/manto_prv/delete`+id);
  }
  //----------------Contenido Manto. Preventivo--------------------
  getAllMantoPrv_Cont(){
    return this.http.get(`${this.API_URL}/manto_prv_cont/`);
  }
  getIdOMantoPrv_Cont(id){
    return this.http.get(`${this.API_URL}/manto_prv_cont/`+id);
  }
  crearMantoPrv_Cont(dato){
    return this.http.post(`${this.API_URL}/manto_prv_cont/crear`,dato);
  }
  updateMantoPrv_Cont(id,dato){
    return this.http.put(`${this.API_URL}/manto_prv_cont/update`+id,dato);
  }
  delateMantoPrv_Cont(id){
    return this.http.delete(`${this.API_URL}/manto_prv_cont/delete`+id);
  }
  
  ////----------Solicitud Manto. Correctivo---------
  getAllSolicitud(){
    return this.http.get(`${this.API_URL}/solicitud/`);
  }
  getIdSolicitud(id){
    return this.http.get(`${this.API_URL}/solicitud/`+id);
  }
  crearSolicitud(dato){
    return this.http.post(`${this.API_URL}/solicitud/crear`,dato);
  }
  updateSolicitud(id,dato){
    return this.http.put(`${this.API_URL}/solicitud/update/`+id,dato);
  }
  delateSolicitud(id){
    return this.http.delete(`${this.API_URL}/solicitud/delete/`+id);
  }

  ////------------------Orden Trabajo----------------------
  getAllOrdenT(){
    return this.http.get(`${this.API_URL}/ordenT/`);
  }
  getIdOrdenT(){
    return this.http.get(`${this.API_URL}/ordenT/`);
  }
  crearOrdenT(dato){
    return this.http.post(`${this.API_URL}/ordenT/crear`,dato);
  }
  updateOrdenT(id,dato){
    return this.http.put(`${this.API_URL}/ordenT/update/`+id,dato);
  }
  delateOrdenT(id){
    return this.http.delete(`${this.API_URL}/ordenT/delete/`+id);
  }
    //------------------------------Enivio_Oficio----------------------
    getAllEnviadoOfic(){
      return this.http.get<RespuestaEnvioOficI[]>(`${this.API_URL}/envio/`);
    }
  
    enviarOfic(dato: EnvioOficI){
      return this.http.post(`${this.API_URL}/envio/`,dato);
    }

  //-----------------------------Envio_Lista

  getAllEnviadoLista(){
    return this.http.get(`${this.API_URL}/enviolista/`);
   }
 
   envairLista(dato){
    return this.http.post(`${this.API_URL}/enviolista/`,dato);
   }
 
   //------------------------Envio_Manto Preventivo
   getAllEnvioMantoPrvent(){
     return this.http.get(`${this.API_URL}/enviomanto/`)
   }
 
   enviarMantoPrevent(dato){
    return this.http.post(`${this.API_URL}/enviomanto/`,dato);
   }
   //------------------------Envio Solicitud--
  getAllEnvioSolicitud(){
   return this.http.get(`${this.API_URL}/enviosolicitud/`);
  }
 
  enviarSolicitud(dato){
    return this.http.post(`${this.API_URL}/enviosolicitud/`,dato);
  }
 

  //----------
  ///Menu
  /*
  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getMenuadmin() {
    return this.http.get<Componente[]>('/assets/data/admin.json');
  }

  getMenuOpt() {
    return this.http.get<Componente[]>('/assets/data/menu3.json')
  }
*/

}
