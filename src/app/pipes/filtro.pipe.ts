import { Pipe, PipeTransform } from '@angular/core';
import { UserPersonal } from '../interfaces/personal';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(usuarios: UserPersonal[], texto: string): UserPersonal[] {
     // console.log(arreglo);
    if ( texto.length === 0) { return usuarios; }
      texto =  texto.toLowerCase();
 
      return  usuarios.filter( usuario =>{
        return usuario.nombre_p.toLowerCase().includes(texto)
        || usuario.apaterno.toLowerCase().includes(texto)
        || usuario.amaterno.toLowerCase().includes(texto)
        || usuario.correo.toLowerCase().includes(texto)
      });

  }

}
