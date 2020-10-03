import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {
  public chartType: string = 'horizontalBar';

  public chartDatasets: Array<any> = [
    { data: [90, 90, 90, 70, 60, 60, 60, 50, 40, 30, 0] }
  ];

  public chartLabels: Array<any> = ['C# (.Net Framework)', '.Net Core', 'ASP.NET', 'React', 'Angular', 'JavaScript/JQuery', 'SQL', 'Java', 'Others'];

  constructor() { }

  ngOnInit(): void {
  }

}
