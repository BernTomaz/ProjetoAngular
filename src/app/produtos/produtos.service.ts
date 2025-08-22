import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto';   // ✅ importa do produto.ts

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private apiUrl = '/api/produtos'; // via proxy vai para json-server

  constructor(private http: HttpClient) {}

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }
}

