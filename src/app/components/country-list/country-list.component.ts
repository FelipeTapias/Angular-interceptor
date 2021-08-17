import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit, OnDestroy {

  countries: Array<any> = [];
  subscription: Subscription;

  constructor(private service: CountryService) { }

  ngOnInit(): void {
    this.subscription = this.service.getAllCountries().subscribe(data => {
      this.countries = data;
    }, err => {
      console.log(err);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
