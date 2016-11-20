/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddheroesComponent } from './addheroes.component';

describe('AddheroesComponent', () => {
  let component: AddheroesComponent;
  let fixture: ComponentFixture<AddheroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddheroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
