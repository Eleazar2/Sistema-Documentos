import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormListverificacionPage } from './form-listverificacion.page';

describe('FormListverificacionPage', () => {
  let component: FormListverificacionPage;
  let fixture: ComponentFixture<FormListverificacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormListverificacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormListverificacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
