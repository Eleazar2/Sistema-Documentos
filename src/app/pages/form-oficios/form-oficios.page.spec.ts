import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormOficiosPage } from './form-oficios.page';

describe('FormOficiosPage', () => {
  let component: FormOficiosPage;
  let fixture: ComponentFixture<FormOficiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOficiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormOficiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
