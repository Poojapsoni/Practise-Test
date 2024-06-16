import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apiService.service'
@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  constructor(private apiService: ApiService) { }
  url = 'https://api.megaport.com/v2/locations';
  ngOnInit() {
    this.apiService.fetchMegaportLocations(this.url)
      .then((data) => {
        console.dir(data), "Api Called Successfully";
        // Handle the data here
      })
      .catch((error) => {
        console.error(error, "Something went Wrongs");
        // Handle the error here
      });
  
  }

}