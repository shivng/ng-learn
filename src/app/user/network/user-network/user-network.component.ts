import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-network',
  templateUrl: './user-network.component.html'
})
export class UserNetworkComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  doLogin(loginform) {
    // console.log(this.username,this.password);
    // console.log(loginform);
    console.log(loginform.value);
    console.log(loginform);
  }
}
