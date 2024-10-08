import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateAporteRequest } from '../models/aporterequest.mode';

@Injectable({
  providedIn: 'root'
})

export class RendaFixaService {
  private URL = 'https://localhost:44360';

  constructor(private http: HttpClient) {}

  getCliente(): Observable<any> {
        let x = this.http.get(this.URL+"/api/cliente/1");
        console.log(x);
    return x;
  } 

  getConta(): Observable<any> {
    let x = this.http.get(this.URL+"/api/conta/1");
    console.log(x);
    return x;
  } 

  getAportes(): Observable<any> {
    let x = this.http.get(this.URL+"/api/aporte/1");
    console.log(x);
    return x;
  }  

  getAllProdutos(): Observable<any> {
    let x = this.http.get(this.URL+"/api/ProdutoRendaFixa");
    console.log(x);
    return x;
  }

  createAporte(aporte: CreateAporteRequest): Observable<any> {
    return this.http.post<CreateAporteRequest>(this.URL+"/api/aporte", aporte);
  }
}