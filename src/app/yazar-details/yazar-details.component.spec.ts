import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YazarDetailsComponent } from './yazar-details.component';

describe('YazarDetailsComponent', () => {
  let component: YazarDetailsComponent;
  let fixture: ComponentFixture<YazarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YazarDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YazarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
