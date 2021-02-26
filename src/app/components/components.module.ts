import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { OpcionComponent } from './opcion/opcion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [HeaderComponent,
                  MenuComponent,
                  OpcionComponent,
                  PerfilComponent
  ],
  exports: [HeaderComponent,
            MenuComponent,
            OpcionComponent,
            PerfilComponent
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
