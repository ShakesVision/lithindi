import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubmitstoryPage } from './submitstory.page';

describe('SubmitstoryPage', () => {
  let component: SubmitstoryPage;
  let fixture: ComponentFixture<SubmitstoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitstoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitstoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
