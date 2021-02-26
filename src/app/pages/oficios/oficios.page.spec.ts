import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OficiosPage } from './oficios.page';

describe('OficiosPage', () => {
  let component: OficiosPage;
  let fixture: ComponentFixture<OficiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OficiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
