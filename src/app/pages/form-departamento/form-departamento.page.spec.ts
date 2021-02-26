import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormDepartamentoPage } from './form-departamento.page';

describe('FormDepartamentoPage', () => {
  let component: FormDepartamentoPage;
  let fixture: ComponentFixture<FormDepartamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDepartamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormDepartamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
