import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment.development";


@Injectable({
    providedIn: 'root'
})

export class DataService {

    private readonly apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) {}

    getProducts(): Observable<any>{
        return this.http.get(`${this.apiUrl}/api/product`);
    }
}