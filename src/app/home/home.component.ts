import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit() {}
  
  Education:any = [
      {
        College:"National High School,Latwan",
        Education:"10th",
        startDate: "Jan 2016",
        endDate: "April 2017",
        
      },
      {
        College:"fajandar Junior College,Vahoor",
        Education:"12",
        startDate: "Jan 2017",
        endDate: "April 2019",
      },
      {
        College:"N.K.Waradkar Junior $ Senior college, Dapoli",
        Education:"Bsc.IT",
        startDate: "Jan 2016",
        endDate: "April 2017",
      },
      {
        College: "National High School,Latwan",
        Education:"Full Stack Development (MEAN)",
        startDate: "Jun 2022",
        endDate: "Nov 2022",
      },
    ];

}
