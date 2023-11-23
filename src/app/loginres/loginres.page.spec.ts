import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginresPage } from './loginres.page';

describe('LoginresPage', () => {
  let component: LoginresPage;
  let fixture: ComponentFixture<LoginresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
