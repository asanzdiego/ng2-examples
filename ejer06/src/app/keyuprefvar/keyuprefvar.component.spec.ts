/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KeyuprefvarComponent } from './keyuprefvar.component';

describe('KeyuprefvarComponent', () => {
  let component: KeyuprefvarComponent;
  let fixture: ComponentFixture<KeyuprefvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyuprefvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyuprefvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
