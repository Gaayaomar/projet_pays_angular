import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Country } from '../country/model/country';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  country:Country | null = null;

  languages:string = '';


  constructor(private apiService: ApiService, private routerService:Router) { }

  ngOnInit(): void {
    this.country =this.apiService.getCountry();
    this.languages = Object.values({...this.country?.languages}).toString();
  }


}
