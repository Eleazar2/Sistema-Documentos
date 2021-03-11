import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecibOficioPage } from './recib-oficio.page';

describe('RecibOficioPage', () => {
  let component: RecibOficioPage;
  let fixture: ComponentFixture<RecibOficioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecibOficioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecibOficioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
