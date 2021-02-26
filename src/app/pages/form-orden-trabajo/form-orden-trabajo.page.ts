import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup,Validators, } from '@angular/forms';

@Component({
  selector: 'app-form-orden-trabajo',
  templateUrl: './form-orden-trabajo.page.html',
  styleUrls: ['./form-orden-trabajo.page.scss'],
})
export class FormOrdenTrabajoPage implements OnInit {

  FormOrdenT:FormGroup;

  constructor(private modalCtrl:ModalController, private fb: FormBuilder) { 
      this.FormOrdenT = this.fb.group({

      });
   }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  Generar(){
    
  }

}
