import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicPrismFormComponent } from './basic-prism-form.component';

describe('BasicPrismFormComponent', () => {
  let component: BasicPrismFormComponent;
  let fixture: ComponentFixture<BasicPrismFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicPrismFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicPrismFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
