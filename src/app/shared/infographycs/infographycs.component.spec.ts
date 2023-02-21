import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographycsComponent } from './infographycs.component';

describe('InfographycsComponent', () => {
  let component: InfographycsComponent;
  let fixture: ComponentFixture<InfographycsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographycsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographycsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
