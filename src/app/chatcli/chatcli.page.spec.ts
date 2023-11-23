import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatcliPage } from './chatcli.page';

describe('ChatcliPage', () => {
  let component: ChatcliPage;
  let fixture: ComponentFixture<ChatcliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChatcliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
