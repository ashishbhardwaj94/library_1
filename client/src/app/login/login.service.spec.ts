import { TestBed ,inject} from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
  ]
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it('should call login method', inject([LoginService], ((loginService: LoginService) => {
    const spy = spyOn(loginService, 'login').and.returnValue(
      of({
        success: true
      })
    );
      let user:any;
    loginService.login(user).subscribe(data => {
      expect(data.success).toBe(true);
    });
    
    expect(spy).toHaveBeenCalled();
  })));
  

  it('should call getprofile() method', inject([LoginService], ((loginService: LoginService) => {
    const spy = spyOn(loginService, 'getProfile').and.returnValue(
      of({
        firstName: 'Ashish'
      })
    );
    loginService.getProfile().subscribe(data => {
      expect(data.firstName).toBe('Ashish');
    });
    
    expect(spy).toHaveBeenCalled();
  })));

});
