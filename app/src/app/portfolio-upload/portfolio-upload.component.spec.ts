import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioUploadComponent } from './portfolio-upload.component';

describe('PortfolioUploadComponent', () => {
  let component: PortfolioUploadComponent;
  let fixture: ComponentFixture<PortfolioUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
