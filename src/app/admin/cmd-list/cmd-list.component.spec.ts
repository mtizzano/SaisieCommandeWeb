import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdListComponent } from './cmd-list.component';

describe('CmdListComponent', () => {
  let component: CmdListComponent;
  let fixture: ComponentFixture<CmdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
