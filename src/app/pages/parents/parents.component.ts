import { IParent } from './../../models/IParent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yps-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss','../../../scss/cabinet-sub-pages.scss']
})
export class ParentsComponent implements OnInit {

  columns = [
    { def: "Id", label: "Id" },
    { def: "firstName", label: "Name" },
    { def: "surname", label: "Surname" },
    { def: "middleName", label: "Middle name" },
    { def: "phoneNumber", label: "Phone" },
    { def: "email", label: "email" },
    { def: "dateOfBirth", label: "Date of birth" },
    { def:"childname", label: "Child Name"},
    { def: "className", label: "Class" }
  ];

  parentsData : IParent[] = PARENTS_DATA;
  ngOnInit() {
  }

}
const PARENTS_DATA: IParent[] = [
  {Id : 1, firstName : "Wesley", surname : "Briar", middleName : "Travis", className : "ROW-1", phoneNumber : "055-033-2680", email : "euismod.in@lobortis.org", dateOfBirth : "14.03.20", childname:["name1","name2"]},
  {Id : 2, firstName : "Wade", surname : "Lucy", middleName : "Yardley", className : "ROW-2", phoneNumber : "087-374-8673", email : "convallis@enimNuncut.net", dateOfBirth : "17.04.19", childname:["name1","name2"]},
  {Id : 3, firstName : "Keefe", surname : "Rae", middleName : "Graiden", className : "ROW-3", phoneNumber : "015-027-1202", email : "inceptos.hymenaeos.Mauris@sit.co.uk", dateOfBirth : "07.07.19", childname:["name1","name2"]},
  {Id : 4, firstName : "Wade", surname : "Brenda", middleName : "Aquila", className : "ROW-4", phoneNumber : "064-025-9867", email : "aliquam@quisdiam.edu", dateOfBirth : "29.03.19", childname:["name1","name2"]},
  {Id : 5, firstName : "Nigel", surname : "Kirsten", middleName : "Igor", className : "ROW-5", phoneNumber : "066-350-6074", email : "Cum@tinciduntnuncac.org", dateOfBirth : "08.10.20", childname:["name1","name2"]},
  {Id : 6, firstName : "Christopher", surname : "Bertha", middleName : "Richard", className : "ROW-6", phoneNumber : "079-596-1938", email : "Donec@ataugue.ca", dateOfBirth : "15.11.19", childname:["name1","name2"]},
  {Id : 7, firstName : "Oren", surname : "Nevada", middleName : "Walker", className : "ROW-7", phoneNumber : "054-223-6207", email : "non@euodiotristique.ca", dateOfBirth : "17.08.20", childname:["name1","name2"]},
  {Id : 8, firstName : "Conan", surname : "Amaya", middleName : "Griffith", className : "ROW-8", phoneNumber : "081-631-1898", email : "non.lobortis@nuncac.org", dateOfBirth : "08.02.20", childname:["name1","name2"]},
  {Id : 9, firstName : "Trevor", surname : "Bo", middleName : "Keegan", className : "ROW-9", phoneNumber : "021-143-7892", email : "ac.turpis.egestas@vitae.net", dateOfBirth : "07.01.21", childname:["name1","name2"]},
  {Id : 10, firstName : "Amery", surname : "Iris", middleName : "Raphael", className : "ROW-10", phoneNumber : "047-752-6686", email : "cubilia.Curae.Donec@nonummyacfeugiat.com", dateOfBirth : "30.09.20", childname:["name1","name2"]}
];
