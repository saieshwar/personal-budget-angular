import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Chart} from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#B3B6B7',
                '#A533FF',
                '#311846',
                '#6D6673'
            ]
        }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels:[]

};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res:any)=>{
      for (var i = 0; i < res.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
    }
      this.createChart();
    });
  }


  createChart(){
    var ctx = document.getElementById('myChart');
    var myPieChart = new Chart(ctx, {
                    type: 'pie',
                    data: this.dataSource
                });

  }


}
