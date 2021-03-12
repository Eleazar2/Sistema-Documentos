import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormFirmaMantenimientoPage } from './form-firma-mantenimiento.page';

describe('FormFirmaMantenimientoPage', () => {
  let component: FormFirmaMantenimientoPage;
  let fixture: ComponentFixture<FormFirmaMantenimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFirmaMantenimientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormFirmaMantenimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
