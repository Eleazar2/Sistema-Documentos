import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormFirmaPage } from './form-firma.page';

describe('FormFirmaPage', () => {
  let component: FormFirmaPage;
  let fixture: ComponentFixture<FormFirmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFirmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormFirmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
