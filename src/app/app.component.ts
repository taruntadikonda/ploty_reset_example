import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';
  range = 100000;
  totalTraces = 1;
  index = false;
  yvalues: number[] = [];
  xvalues: number[] = [];
  graph1: any = {
    data: [],
    layout: { title: 'A Fancy Plot', xaxis: { autorange: true } },
  };

  constructor() {}
  ngOnInit(): void {
    for (let mainIndex = 0; mainIndex < this.totalTraces; mainIndex++) {
      this.yvalues.length = 0;
      this.xvalues.length = 0;
      for (let index = 0; index < this.range; index++) {
        this.xvalues.push(index);
        this.yvalues.push(index * index);
      }
      this.graph1.data.push({
        x: [...this.xvalues],
        y: [...this.yvalues],
        type: 'scatter',
      });
    }
  }

  clickEvent(e:any){
    console.log(e)
  }
}
