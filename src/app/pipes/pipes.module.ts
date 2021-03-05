import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { FiltrodPipe } from './filtrod.pipe';
import { FiltrouaPipe } from './filtroua.pipe';



@NgModule({
  declarations: [FiltroPipe, FiltrodPipe, FiltrouaPipe],
  exports: [FiltroPipe,FiltrodPipe,FiltrouaPipe]
  /*imports: [
   // CommonModule,
    
  ]*/
})
export class PipesModule { }
