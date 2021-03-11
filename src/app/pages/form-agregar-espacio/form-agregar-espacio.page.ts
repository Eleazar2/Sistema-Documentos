import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-agregar-espacio',
  templateUrl: './form-agregar-espacio.page.html',
  styleUrls: ['./form-agregar-espacio.page.scss'],
})
export class FormAgregarEspacioPage implements OnInit {
  agregarespacio: FormGroup;

  constructor(private fb: FormBuilder) { 

    this.agregarespacio = this.fb.group({
        espacio:['',[Validators.required]],
        hallazgo:['',[Validators.required]],
        atendido:['',[Validators.required]]
    });

   }

  ngOnInit() {
  }

  Generar(){

  }

  selectClick(event){
    console.log(event);
  }

}
