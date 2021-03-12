import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutorizarSolicitudPage } from './autorizar-solicitud.page';

describe('AutorizarSolicitudPage', () => {
  let component: AutorizarSolicitudPage;
  let fixture: ComponentFixture<AutorizarSolicitudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizarSolicitudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutorizarSolicitudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
