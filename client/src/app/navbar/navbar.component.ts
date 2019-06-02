import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { IBook } from '../model/books';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  books:IBook[];

  constructor(
    private router: Router,
    private loginService:LoginService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.loginService.logout();
    this.flashMessage.show('You are logged out',{
      cssClass:'alert-success',
      timeout:1000
    })
    this.router.navigate(['/login']);
    return false;
  }

}
