import { Time } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posicao, TempoPermanencia } from '../model/tempo-permanencia.model';

@Injectable({ providedIn: 'root' })
export class TempoPermanenciaService {
    constructor(private http: HttpClient) {}

    private url = "http://localhost:3001/";
    
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    getTempoPermanencia(body: any): Promise<TempoPermanencia[] | undefined> {
        return this.http.post<TempoPermanencia[]>(`${this.url}tempoPermanencia/findByFilter`, JSON.stringify(body), this.httpOptions).toPromise();
    }

    getOpcoesSelect(): Observable<Posicao[] | undefined> {
        return this.http.get<Posicao[]>(`${this.url}posicao/findToSelect`, this.httpOptions);
    }
}