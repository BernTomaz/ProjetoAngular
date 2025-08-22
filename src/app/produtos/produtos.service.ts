import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto';

// produtos.service.ts
@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private readonly url = '/api/produtos'; // <— mudou

  constructor(private http: HttpClient) {}

  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }
}
