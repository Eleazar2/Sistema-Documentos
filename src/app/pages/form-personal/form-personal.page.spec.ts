import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormPersonalPage } from './form-personal.page';

describe('FormPersonalPage', () => {
  let component: FormPersonalPage;
  let fixture: ComponentFixture<FormPersonalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPersonalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormPersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
