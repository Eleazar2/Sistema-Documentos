import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutorizarOficioPage } from './autorizar-oficio.page';

describe('AutorizarOficioPage', () => {
  let component: AutorizarOficioPage;
  let fixture: ComponentFixture<AutorizarOficioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizarOficioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutorizarOficioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
