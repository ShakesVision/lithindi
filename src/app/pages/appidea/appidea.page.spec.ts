import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppideaPage } from './appidea.page';

describe('AppideaPage', () => {
  let component: AppideaPage;
  let fixture: ComponentFixture<AppideaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppideaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppideaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
