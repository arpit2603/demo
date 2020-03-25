import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from './services/app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'demo';
  formdata:any;
  userName:any;
  password:any;

  constructor(private appService:AppService){}
  ngOnInit(){
    this.formdata = new FormGroup({
      userName: new FormControl(),
      password: new FormControl()
    });
  }
  loginSubmit(loginInfo:any){
    this.appService.loginService(loginInfo.value);
  }
}
