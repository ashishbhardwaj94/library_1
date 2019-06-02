import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let de: DebugElement;
  let el:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ UserComponent ],
      providers:[FlashMessagesService]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(UserComponent);
      component = fixture.componentInstance;
      de=fixture.debugElement.query(By.css('form'));
      el=de.nativeElement;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have text as 'Signup to conitnue'`, async(() => {
    expect(component.text).toEqual('Signup to continue');
  }));

  it(`should call onSubmit() method`, async(() => {
    fixture.detectChanges();
    spyOn(component,'onSubmit');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  }));

  it(`form should be invalid`, async(() => {
    component.userform.controls['firstName'].setValue('');
    component.userform.controls['lastName'].setValue('');
    component.userform.controls['email'].setValue('');
    component.userform.controls['password'].setValue('');
    expect(component.userform.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.userform.controls['firstName'].setValue('ashish');
    component.userform.controls['lastName'].setValue('bhardwaj');
    component.userform.controls['email'].setValue('ashish@gmail.com');
    component.userform.controls['password'].setValue('aaaaaa');
    expect(component.userform.valid).toBeTruthy();
  }));

});
