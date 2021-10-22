import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/Car';
import { CarQuery } from '../models/CarQuery';

@Injectable()
export class CarService {
    constructor(private http: HttpClient) { }

    toQueryString(obj:any) {
        var parts = [];
        for (var property in obj) {
            var value = obj[property];
            if (value !== undefined) {
                parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
            }
        }       
        return parts.join('&');
    }

    getFilteredCarList(query: CarQuery): Observable<Car[]> {
        return this.http.get<Car[]>('https://localhost:44396/api/car' + '?' + this.toQueryString(query));
    }
}