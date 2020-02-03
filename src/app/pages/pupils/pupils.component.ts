import { IUser } from './../../models/IUser';
import {Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'yps-pupils',
  templateUrl: './pupils.component.html',
  styleUrls: ['./pupils.component.scss', '../../../scss/cabinet-sub-pages.scss']
})

export class PupilsComponent implements OnInit {
  pupilsData: IUser[] = PUPILS_DATA;

  columns = [
    { def: "Id", label: "Id" },
    { def: "firstName", label: "Name" },
    { def: "Surname", label: "Surname" },
    { def: "MiddleName", label: "Middle name" },
    { def: "Class", label: "Class" },
    { def: "PhoneNumber", label: "Phone" },
    { def: "Email", label: "Email" },
    { def: "DateOfBirth", label: "Date of birth" },
  ];

  constructor(private http: HttpClient) 
  {}

  ngOnInit() {
    this.http.get("https://localhost:44372/api/Master");
  }
}

const PUPILS_DATA: IUser[] = [
  {Id : 1, firstName : "Wesley", surname : "Briar", MiddleName : "Travis", Class : "ROW-1", PhoneNumber : "055-033-2680", Email : "euismod.in@lobortis.org", DateOfBirth : "14.03.20"},
  {Id : 2, firstName : "Wade", surname : "Lucy", MiddleName : "Yardley", Class : "ROW-2", PhoneNumber : "087-374-8673", Email : "convallis@enimNuncut.net", DateOfBirth : "17.04.19"},
  {Id : 3, firstName : "Keefe", surname : "Rae", MiddleName : "Graiden", Class : "ROW-3", PhoneNumber : "015-027-1202", Email : "inceptos.hymenaeos.Mauris@sit.co.uk", DateOfBirth : "07.07.19"},
  {Id : 4, firstName : "Wade", surname : "Brenda", MiddleName : "Aquila", Class : "ROW-4", PhoneNumber : "064-025-9867", Email : "aliquam@quisdiam.edu", DateOfBirth : "29.03.19"},
  {Id : 5, firstName : "Nigel", surname : "Kirsten", MiddleName : "Igor", Class : "ROW-5", PhoneNumber : "066-350-6074", Email : "Cum@tinciduntnuncac.org", DateOfBirth : "08.10.20"},
  {Id : 6, firstName : "Christopher", surname : "Bertha", MiddleName : "Richard", Class : "ROW-6", PhoneNumber : "079-596-1938", Email : "Donec@ataugue.ca", DateOfBirth : "15.11.19"},
  {Id : 7, firstName : "Oren", surname : "Nevada", MiddleName : "Walker", Class : "ROW-7", PhoneNumber : "054-223-6207", Email : "non@euodiotristique.ca", DateOfBirth : "17.08.20"},
  {Id : 8, firstName : "Conan", surname : "Amaya", MiddleName : "Griffith", Class : "ROW-8", PhoneNumber : "081-631-1898", Email : "non.lobortis@nuncac.org", DateOfBirth : "08.02.20"},
  {Id : 9, firstName : "Trevor", surname : "Bo", MiddleName : "Keegan", Class : "ROW-9", PhoneNumber : "021-143-7892", Email : "ac.turpis.egestas@vitae.net", DateOfBirth : "07.01.21"},
  {Id : 10, firstName : "Amery", surname : "Iris", MiddleName : "Raphael", Class : "ROW-10", PhoneNumber : "047-752-6686", Email : "cubilia.Curae.Donec@nonummyacfeugiat.com", DateOfBirth : "30.09.20"},
  {Id : 11, firstName : "Rooney", surname : "Maggy", MiddleName : "Robert", Class : "ROW-11", PhoneNumber : "063-789-6571", Email : "ut@condimentumegetvolutpat.org", DateOfBirth : "22.01.21"},
  {Id : 12, firstName : "Addison", surname : "Winter", MiddleName : "Kirk", Class : "ROW-12", PhoneNumber : "023-809-7291", Email : "pede.malesuada.vel@acturpis.co.uk", DateOfBirth : "28.08.20"},
  {Id : 13, firstName : "Demetrius", surname : "Sophia", MiddleName : "Nicholas", Class : "ROW-13", PhoneNumber : "027-851-8881", Email : "ipsum.leo@Nam.com", DateOfBirth : "14.11.19"},
  {Id : 14, firstName : "Nicholas", surname : "Evelyn", MiddleName : "Gary", Class : "ROW-14", PhoneNumber : "063-217-3491", Email : "elementum.lorem.ut@Sed.ca", DateOfBirth : "14.03.20"},
  {Id : 15, firstName : "Kaseem", surname : "Nyssa", MiddleName : "Levi", Class : "ROW-15", PhoneNumber : "090-831-4662", Email : "auctor.Mauris@amet.org", DateOfBirth : "15.10.19"},
  {Id : 16, firstName : "Lucian", surname : "Ava", MiddleName : "Callum", Class : "ROW-16", PhoneNumber : "021-359-6334", Email : "non.dui@dolor.com", DateOfBirth : "21.08.19"},
  {Id : 17, firstName : "Cruz", surname : "Nayda", MiddleName : "Yuli", Class : "ROW-17", PhoneNumber : "011-679-2709", Email : "lectus@ac.ca", DateOfBirth : "22.03.20"},
  {Id : 18, firstName : "Mufutau", surname : "Lareina", MiddleName : "Cyrus", Class : "ROW-18", PhoneNumber : "068-366-9300", Email : "quis@et.com", DateOfBirth : "13.09.19"},
  {Id : 19, firstName : "Rashad", surname : "Kay", MiddleName : "Arthur", Class : "ROW-19", PhoneNumber : "084-937-7435", Email : "blandit.at.nisi@Aliquamgravida.com", DateOfBirth : "30.04.19"},
  {Id : 20, firstName : "Yasir", surname : "Lunea", MiddleName : "Kevin", Class : "ROW-20", PhoneNumber : "086-373-7163", Email : "libero.Integer@lobortis.org", DateOfBirth : "11.10.19"},
];
