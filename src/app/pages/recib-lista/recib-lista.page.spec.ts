import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecibListaPage } from './recib-lista.page';

describe('RecibListaPage', () => {
  let component: RecibListaPage;
  let fixture: ComponentFixture<RecibListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecibListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecibListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
