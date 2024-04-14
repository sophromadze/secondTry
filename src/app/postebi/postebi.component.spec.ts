import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostebiComponent } from './postebi.component';

describe('PostebiComponent', () => {
  let component: PostebiComponent;
  let fixture: ComponentFixture<PostebiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostebiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostebiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
