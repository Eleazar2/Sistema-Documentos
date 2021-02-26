import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UseradminPage } from './useradmin.page';

describe('UseradminPage', () => {
  let component: UseradminPage;
  let fixture: ComponentFixture<UseradminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseradminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UseradminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
