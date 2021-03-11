import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { OpcionComponent } from './opcion/opcion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';
import { CompartirdocComponent } from './compartirdoc/compartirdoc.component';



@NgModule({
  declarations: [HeaderComponent,
                  MenuComponent,
                  OpcionComponent,
                  PerfilComponent,
                  CompartirdocComponent
  ],
  exports: [HeaderComponent,
            MenuComponent,
            OpcionComponent,
            PerfilComponent,
            CompartirdocComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
