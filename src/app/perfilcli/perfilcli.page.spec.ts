import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilcliPage } from './perfilcli.page';

describe('PerfilcliPage', () => {
  let component: PerfilcliPage;
  let fixture: ComponentFixture<PerfilcliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilcliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
