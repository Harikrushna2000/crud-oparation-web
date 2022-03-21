import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/servise/auth.service';
import { Chart } from 'chart.js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-deshbord',
  templateUrl: './deshbord.component.html',
  styleUrls: ['./deshbord.component.css'],
})
export class DeshbordComponent implements OnInit {
  constructor(private auth: AuthService) {}

  url = environment.httpsUrl;

  dashData: any;
  ibo_id: any;
  target: any;
  adata: any;
  details:any;

  dashboard_data: any = [];

  ngOnInit(): void {
    this.dData();

    var maindata = {
      ibo_id: 1,
    };

    var fd = new FormData();
    // tslint:disable-next-line:typedef
    $.each(maindata, function (key: string, value: any | Blob) {
      fd.append(key, value);
    });

    var myHeaders = new Headers();

    fetch(this.url + '/ibo_dashboard', {
      method: 'POST',
      headers: myHeaders,
      body: fd,
    })
      .then((respons) => respons.json())
      .then((res) => {
        // console.log(res.dashboard_data);

        this.dashboard_data = res.dashboard_data;
        this.target = res.targets;
        this.adata = [10, 20, 30, 40, 10
          // res.dashboard_data.totalClient,
          // res.dashboard_data.total_SSP_selling,
          // res.dashboard_data.total_power_one_selling,
          // res.dashboard_data.total_paid_video_selling,
          // res.dashboard_data.total_travel_selling,
        ];

        //Line Chart Start
        const myLineChart = new Chart('myLineChart', {
          type: 'line',
          data: {
            labels: [
              'client_target',
              'ssp_target',
              'power_one_target',
              'free_target',
              'paid_target',
            ],
            datasets: [
              {
                label: 'Current',
                data : this.adata,
                // data: [
                //   this.dashboard_data.totalClient,
                //   this.dashboard_data.total_SSP_selling,
                //   this.dashboard_data.total_power_one_selling,
                //   this.dashboard_data.total_paid_video_selling,
                //   this.dashboard_data.total_travel_selling,
                // ],
                borderColor: 'rgb(75, 192, 192)',
              },
              //   {
              //     label:'Previous',
              //     data: [this.target.client_target,this.target.ssp_target,this.target.power_one_target,this.target.free_target,this.target.paid_target],
              //     borderColor: 'gray'
              // }
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
        });
        //Line Chart End

        //Bar Chart Start
        const myBarChart = new Chart('myBarChart', {
          type: 'bar',
          data: {
            labels: [
              'totalClient',
              'total_SSP',
              'total_power_one',
              'total_paid_video',
              'total_travel',
            ],
            datasets: [
              {
                label: 'Votes',
                data: this.adata,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
              },
            ],
          },

          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
        });
      });
    //Bar Chart End
  }

  dData() {
    this.auth.getData().subscribe((res) => {
      this.details = res;
      this.dashData = this.details.data;
      console.log(this.dashData)
    });
  }
}
