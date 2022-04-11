import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Country } from '../country/model/country';

@Component({
  selector: 'app-liste_pays',
  templateUrl: './list_pays.component.html',
  styleUrls: ['./liste_pays.component.css']
})
export class Liste_paysComponent implements OnInit {

  keyWord: string = '';

  filteredCountriesByContinent:[]=[];

  countries$ : Observable<Array<Country>> | undefined


  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.countries$ = this.api.getCountries(this.keyWord);
  }

  search(){
    this.countries$ = this.api.getCountries(this.keyWord);
  }

}
