import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormFirma2MantenimientoPage } from './form-firma2-mantenimiento.page';

describe('FormFirma2MantenimientoPage', () => {
  let component: FormFirma2MantenimientoPage;
  let fixture: ComponentFixture<FormFirma2MantenimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFirma2MantenimientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormFirma2MantenimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
