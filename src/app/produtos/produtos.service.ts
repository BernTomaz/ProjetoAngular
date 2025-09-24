import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from './produto';   //  importa do produto.ts

@Injectable({ providedIn: 'root' })
export class ProdutosService {  
  private apiUrl = '/api/produtos'; 

  constructor(private http: HttpClient) {}

  listar(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.apiUrl);
  }
}

