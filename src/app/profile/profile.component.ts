import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user_data:any


  constructor() { 

    this.user_data = localStorage.getItem('user-profile');
    this.user_data = JSON.parse(this.user_data);
    console.log(this.user_data);
    
  }



  ngOnInit(): void {
  }

}
