import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecibMantoPreventPage } from './recib-manto-prevent.page';

describe('RecibMantoPreventPage', () => {
  let component: RecibMantoPreventPage;
  let fixture: ComponentFixture<RecibMantoPreventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecibMantoPreventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecibMantoPreventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
