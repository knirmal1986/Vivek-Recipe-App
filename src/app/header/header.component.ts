import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated : boolean= true;
  constructor() { }

  ngOnInit() {
  }

  onLogout(){
    console.log(" user logout")
  }

  onSaveData(){
    console.log(" user onSaveData")
  }

  onFetchData(){
    console.log(" user onFetchData")
  }
}
