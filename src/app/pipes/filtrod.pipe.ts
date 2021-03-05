import { Pipe, PipeTransform } from '@angular/core';
import { Depto } from '../interfaces/depto';

@Pipe({
  name: 'filtrod'
})
export class FiltrodPipe implements PipeTransform {

  transform(departamentos: Depto[], texto: string): Depto[] {

    if( texto.length === 0 ){
      return departamentos;
    }
    texto = texto.toLowerCase();
    return departamentos.filter(departamento => {
      return departamento.nombred.toLowerCase().includes(texto);
    });
  }

}
