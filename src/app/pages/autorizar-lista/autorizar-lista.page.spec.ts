import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutorizarListaPage } from './autorizar-lista.page';

describe('AutorizarListaPage', () => {
  let component: AutorizarListaPage;
  let fixture: ComponentFixture<AutorizarListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizarListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutorizarListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
