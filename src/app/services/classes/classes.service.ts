import { IParent } from "../../models/IParent";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { apiUrl } from "src/constants/urls";
import { HttpOptionsService } from "../http-options/http-options.service";
import { IClass } from "src/app/models/IClass";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class ClassesService {
  classes: IClass[] = [];
  private url: string = apiUrl + "/classes";

  public parents: IClass[];
  constructor(
    private http: HttpClient,
    private HttpOptions: HttpOptionsService
  ) {}

  getClassesBySchool = () => {
    this.HttpOptions.loadHeaders();
    return this.http
      .get<IClass[]>(
        this.url + "/GetBySchoolWithFullInfo",
        this.HttpOptions.options
      )
      .subscribe((res: IClass[]) => {
        this.classes = res;
      });
  };
}
