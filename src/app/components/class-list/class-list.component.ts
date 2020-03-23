import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpOptionsService } from "src/app/services/http-options/http-options.service";
import { apiUrl } from "src/constants/urls";
import { IClass } from "src/app/models/IClass";
import { ClassesService } from "src/app/services/classes/classes.service";

@Component({
  selector: "yps-class-list",
  templateUrl: "./class-list.component.html",
  styleUrls: ["./class-list.component.scss"]
})
export class ClassListComponent implements OnInit {
  classes: IClass[];

  constructor(
    public classesService: ClassesService
  ) {}

  ngOnInit(): void {
    this.classesService.getClassesBySchool();
  }
}
