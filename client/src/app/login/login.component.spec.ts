import { async, ComponentFixture, TestBed ,inject } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from './login.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,RouterTestingModule,HttpClientModule],
      declarations: [ LoginComponent ],
      providers:[FlashMessagesService,LoginService]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});
