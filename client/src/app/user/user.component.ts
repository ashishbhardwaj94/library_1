import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,Form} from '@angular/forms';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userform: FormGroup;
  submitted = false;
  text='Signup to continue';

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private flashMessage:FlashMessagesService
              ) { 
    this.userform = this.formBuilder.group({
      'firstName': ['',Validators.required],
      'lastName': ['',Validators.required],
      'email': ['',[Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit() {
  }

  get f() { return this.userform.controls; }

  onSubmit(userform:FormGroup){
    this.submitted = true;
    if (this.userform.invalid) {
      return;
  }
    this.userService.register(this.userform.value).subscribe(data => {
      var flashMessage=this.flashMessage;
      if(data.success){
        flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });

  }

}
