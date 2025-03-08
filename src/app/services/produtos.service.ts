import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private readonly apiUrl =
    'https://my-json-server.typicode.com/lp-mateus/API-Produtos-Json-Placeholder';
  constructor(private readonly http: HttpClient) {}

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl + '/products');
  }
}
