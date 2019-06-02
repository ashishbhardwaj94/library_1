import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';

import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('validateAdmin')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports:[FormsModule,HttpClientTestingModule,ReactiveFormsModule],
      providers: [FlashMessagesService,AdminService,
        { provide: Router, useValue: mockRouter},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return adminbooks', inject([AdminService], ((adminService: AdminService) => {
    let mockRouter = {
      navigate: jasmine.createSpy('validateAdmin')
    }
   
    expect(adminService.admin(<any>{}, <any>{})).toBe(true);
    fixture.detectChanges();
    expect (mockRouter.navigate).toHaveBeenCalledWith(['/adminBooks']);
  })));

  it('should return admin', inject([AdminService], ((adminService: AdminService) => {
    let mockRouter = {
      navigate: jasmine.createSpy('validateAdmin')
    }
    fixture.detectChanges();
    expect(adminService.admin(<any>{}, <any>{})).toBe(false);
    expect (mockRouter.navigate).toHaveBeenCalledWith(['/admin']);
  })));
});
