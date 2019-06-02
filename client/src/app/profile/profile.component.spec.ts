import { async, ComponentFixture, TestBed ,inject} from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from '../login/login.service';
import { of } from 'rxjs/observable/of';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientModule],
      declarations: [ ProfileComponent ],
      providers:[FlashMessagesService,LoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getprofile() method', inject([LoginService], ((loginService: LoginService) => {
    const spy = spyOn(loginService, 'getProfile').and.returnValue(
      of({
        firstName: 'Ashish'
      })
    );
    loginService.getProfile().subscribe(data => {
      expect(data.firstName).toBe('Ashish');
    });
    fixture.detectChanges();
    expect(component.profile).toHaveBeenCalled();
  })));

});
