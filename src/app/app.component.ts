import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user/user.service';
import { get } from 'js-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'YPS-Frontend';
  cabinetUrl: string;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    const token = get("token");
    const role = get("role");

    if (typeof(token) != "undefined") {
      let requestUrl: string;

      switch (role) {
        case "admin":
          requestUrl = "/admin";
          break;
        case "head-master":
          requestUrl = "/teachers/getmaster";
          break;
        case "master":
          requestUrl = "/teachers/getmaster";
          break;
        case "head-assistant":
          requestUrl = "/teachers/getheadassistant";
          break;
        case "teacher":
          requestUrl = "/teachers/getteacherbyid";
          break;
        case "parent":
          requestUrl = "/parents/getparentprofileinfo";
          break;
        case "pupil":
          requestUrl = "/pupils/getpupilbyid";
          break;
        default:
          console.log("somthing went wrong");
          break;
      }

      if (typeof(role) != "undefined")
        this.cabinetUrl = `/${role}`;

      this.userService.getUser(requestUrl);
    }
  }
}
