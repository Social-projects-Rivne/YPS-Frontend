import { IPupil } from '../../models/IPupil';
import {Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'yps-pupils',
  templateUrl: './pupils.component.html',
  styleUrls: ['./pupils.component.scss', '../../../scss/cabinet-sub-pages.scss']
})

export class PupilsComponent implements OnInit {
  pupilsData: IPupil[] = PUPILS_DATA;

  columns = [
    { def: "Id", label: "Id" },
    { def: "firstName", label: "Name" },
    { def: "surname", label: "Surname" },
    { def: "middleName", label: "Middle name" },
    { def: "className", label: "Class" },
    { def: "phoneNumber", label: "Phone" },
    { def: "email", label: "email" },
    { def: "dateOfBirth", label: "Date of birth" },
  ];

  constructor(private http: HttpClient) 
  {}

  ngOnInit() {
    this.http.get("https://localhost:44372/api/Master");
  }
}

const PUPILS_DATA: IPupil[] = [
  {Id : 1, firstName : "Wesley", surname : "Briar", middleName : "Travis", className : "ROW-1", phoneNumber : "055-033-2680", email : "euismod.in@lobortis.org", dateOfBirth : "14.03.20"},
  {Id : 2, firstName : "Wade", surname : "Lucy", middleName : "Yardley", className : "ROW-2", phoneNumber : "087-374-8673", email : "convallis@enimNuncut.net", dateOfBirth : "17.04.19"},
  {Id : 3, firstName : "Keefe", surname : "Rae", middleName : "Graiden", className : "ROW-3", phoneNumber : "015-027-1202", email : "inceptos.hymenaeos.Mauris@sit.co.uk", dateOfBirth : "07.07.19"},
  {Id : 4, firstName : "Wade", surname : "Brenda", middleName : "Aquila", className : "ROW-4", phoneNumber : "064-025-9867", email : "aliquam@quisdiam.edu", dateOfBirth : "29.03.19"},
  {Id : 5, firstName : "Nigel", surname : "Kirsten", middleName : "Igor", className : "ROW-5", phoneNumber : "066-350-6074", email : "Cum@tinciduntnuncac.org", dateOfBirth : "08.10.20"},
  {Id : 6, firstName : "Christopher", surname : "Bertha", middleName : "Richard", className : "ROW-6", phoneNumber : "079-596-1938", email : "Donec@ataugue.ca", dateOfBirth : "15.11.19"},
  {Id : 7, firstName : "Oren", surname : "Nevada", middleName : "Walker", className : "ROW-7", phoneNumber : "054-223-6207", email : "non@euodiotristique.ca", dateOfBirth : "17.08.20"},
  {Id : 8, firstName : "Conan", surname : "Amaya", middleName : "Griffith", className : "ROW-8", phoneNumber : "081-631-1898", email : "non.lobortis@nuncac.org", dateOfBirth : "08.02.20"},
  {Id : 9, firstName : "Trevor", surname : "Bo", middleName : "Keegan", className : "ROW-9", phoneNumber : "021-143-7892", email : "ac.turpis.egestas@vitae.net", dateOfBirth : "07.01.21"},
  {Id : 10, firstName : "Amery", surname : "Iris", middleName : "Raphael", className : "ROW-10", phoneNumber : "047-752-6686", email : "cubilia.Curae.Donec@nonummyacfeugiat.com", dateOfBirth : "30.09.20"},
  {Id : 11, firstName : "Rooney", surname : "Maggy", middleName : "Robert", className : "ROW-11", phoneNumber : "063-789-6571", email : "ut@condimentumegetvolutpat.org", dateOfBirth : "22.01.21"},
  {Id : 12, firstName : "Addison", surname : "Winter", middleName : "Kirk", className : "ROW-12", phoneNumber : "023-809-7291", email : "pede.malesuada.vel@acturpis.co.uk", dateOfBirth : "28.08.20"},
  {Id : 13, firstName : "Demetrius", surname : "Sophia", middleName : "Nicholas", className : "ROW-13", phoneNumber : "027-851-8881", email : "ipsum.leo@Nam.com", dateOfBirth : "14.11.19"},
  {Id : 14, firstName : "Nicholas", surname : "Evelyn", middleName : "Gary", className : "ROW-14", phoneNumber : "063-217-3491", email : "elementum.lorem.ut@Sed.ca", dateOfBirth : "14.03.20"},
  {Id : 15, firstName : "Kaseem", surname : "Nyssa", middleName : "Levi", className : "ROW-15", phoneNumber : "090-831-4662", email : "auctor.Mauris@amet.org", dateOfBirth : "15.10.19"},
  {Id : 16, firstName : "Lucian", surname : "Ava", middleName : "Callum", className : "ROW-16", phoneNumber : "021-359-6334", email : "non.dui@dolor.com", dateOfBirth : "21.08.19"},
  {Id : 17, firstName : "Cruz", surname : "Nayda", middleName : "Yuli", className : "ROW-17", phoneNumber : "011-679-2709", email : "lectus@ac.ca", dateOfBirth : "22.03.20"},
  {Id : 18, firstName : "Mufutau", surname : "Lareina", middleName : "Cyrus", className : "ROW-18", phoneNumber : "068-366-9300", email : "quis@et.com", dateOfBirth : "13.09.19"},
  {Id : 19, firstName : "Rashad", surname : "Kay", middleName : "Arthur", className : "ROW-19", phoneNumber : "084-937-7435", email : "blandit.at.nisi@Aliquamgravida.com", dateOfBirth : "30.04.19"},
  {Id : 20, firstName : "Yasir", surname : "Lunea", middleName : "Kevin", className : "ROW-20", phoneNumber : "086-373-7163", email : "libero.Integer@lobortis.org", dateOfBirth : "11.10.19"},
];
