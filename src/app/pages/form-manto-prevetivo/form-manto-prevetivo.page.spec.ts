import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormMantoPrevetivoPage } from './form-manto-prevetivo.page';

describe('FormMantoPrevetivoPage', () => {
  let component: FormMantoPrevetivoPage;
  let fixture: ComponentFixture<FormMantoPrevetivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMantoPrevetivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormMantoPrevetivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
