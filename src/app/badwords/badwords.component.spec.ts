import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadwordsComponent } from './badwords.component';

describe('BadwordsComponent', () => {
  let component: BadwordsComponent;
  let fixture: ComponentFixture<BadwordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadwordsComponent]
    });
    fixture = TestBed.createComponent(BadwordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
