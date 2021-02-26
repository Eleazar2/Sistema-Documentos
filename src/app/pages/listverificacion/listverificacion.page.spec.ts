import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListverificacionPage } from './listverificacion.page';

describe('ListverificacionPage', () => {
  let component: ListverificacionPage;
  let fixture: ComponentFixture<ListverificacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListverificacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListverificacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
