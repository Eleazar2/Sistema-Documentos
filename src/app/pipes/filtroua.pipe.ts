import { Pipe, PipeTransform } from '@angular/core';
import { UserAdmin } from '../interfaces/user-admin';

@Pipe({
  name: 'filtroua'
})
export class FiltrouaPipe implements PipeTransform {

  transform(useradmin: UserAdmin[],texto: string): UserAdmin[] {
    if (texto.length === 0) {
      return useradmin;
    }
    texto = texto.toLowerCase();

    return useradmin.filter( user => {
      return user.nombre.toLowerCase().includes(texto)
      || user.apaterno.toLowerCase().includes(texto)
      || user.amaterno.toLowerCase().includes(texto)
      || user.correo.toLowerCase().includes(texto)
    });
  }

}
