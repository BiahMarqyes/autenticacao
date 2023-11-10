import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegiscliPage } from './regiscli.page';

describe('RegiscliPage', () => {
  let component: RegiscliPage;
  let fixture: ComponentFixture<RegiscliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegiscliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
