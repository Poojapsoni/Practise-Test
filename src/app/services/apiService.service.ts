import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  async fetchMegaportLocations(url): Promise<any> {
   
    try {
      const data = await this.http.get(url).toPromise();
      return data;
    } catch (error) {
      throw new Error('Error fetching Megaport locations: ' + error.message);
    }
  }

}