import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormAgregarEspacioPage } from './form-agregar-espacio.page';

describe('FormAgregarEspacioPage', () => {
  let component: FormAgregarEspacioPage;
  let fixture: ComponentFixture<FormAgregarEspacioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAgregarEspacioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormAgregarEspacioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
