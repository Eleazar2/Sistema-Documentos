import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormOrdenTrabajoPage } from './form-orden-trabajo.page';

describe('FormOrdenTrabajoPage', () => {
  let component: FormOrdenTrabajoPage;
  let fixture: ComponentFixture<FormOrdenTrabajoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOrdenTrabajoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormOrdenTrabajoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
