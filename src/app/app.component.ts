import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timelines';
  
  
  ngOnInit() {}
  
  Education:any = [
      {
        company: "ChatGen",
    startDate: "Mar 2020",
    endDate: "Apr 2021",
    title: "Frontend Developer",
      },
      {
        company: "Mattermost",
    startDate: "Aug 2020",
    endDate: "Dec 2020",
    title: "Contributor"
      },
      {
        company: "Place Infotech",
        startDate: "Mar 2020",
        endDate: "Dec 2020",
        title: " Anular Developer"
      },
      {
        company: "LiveWire Tech",
        startDate: "Aug 2021",
        endDate: "Dec 2022",
        title:  "Web Developer",
      },
    ];



  }
