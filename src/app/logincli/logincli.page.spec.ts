import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogincliPage } from './logincli.page';

describe('LogincliPage', () => {
  let component: LogincliPage;
  let fixture: ComponentFixture<LogincliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogincliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
