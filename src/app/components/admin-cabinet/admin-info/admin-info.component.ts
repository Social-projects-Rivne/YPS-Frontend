import { Component, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'yps-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.scss']
})
export class AdminInfoComponent implements OnInit {

  user: IUser = {
    id: 1,
    firstName: "",
    surname:"",
    middleName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
  };
  constructor(
    private userService: UserinfoService
    ) {  
    }

  ngOnInit() {
    this.userService.getUser()
    .subscribe(data =>this.user =data
    //    {
    //   console.log("result", data);
    // }
    );
  }
  show(){
    console.log(this.user);
  }

}
