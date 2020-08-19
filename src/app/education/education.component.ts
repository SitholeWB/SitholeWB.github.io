import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  ukznURL: string = "https://ukzn.ac.za/";
  expandCompany: string = "";
  constructor() { }


  ngOnInit(): void {
  }

  public toggleCompanyDetails(company: string): void {
    this.expandCompany = company;
  }

}
