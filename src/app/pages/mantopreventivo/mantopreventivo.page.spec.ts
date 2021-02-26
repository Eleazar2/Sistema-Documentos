import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MantopreventivoPage } from './mantopreventivo.page';

describe('MantopreventivoPage', () => {
  let component: MantopreventivoPage;
  let fixture: ComponentFixture<MantopreventivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantopreventivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MantopreventivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
