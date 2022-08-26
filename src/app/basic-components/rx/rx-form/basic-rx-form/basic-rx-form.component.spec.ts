import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRxFormComponent } from './basic-rx-form.component';

describe('BasicRxFormComponent', () => {
  let component: BasicRxFormComponent;
  let fixture: ComponentFixture<BasicRxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicRxFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicRxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
