import { Component, OnInit } from '@angular/core';
import { Car } from './models/Car';
import { CarQuery } from './models/CarQuery';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ITrellisCarDealershipSPA';

  carQuery: CarQuery;
  carList: Car[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carQuery = new CarQuery();
  }

  searchForCars(): void {
    this.carService.getFilteredCarList(this.carQuery).subscribe(res => this.carList = res);
  }
}
