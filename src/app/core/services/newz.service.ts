import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleResponseModel } from '../models/article-response.model';
import { ArticleModel } from '../models/article.model';

@Injectable()
export class NewzService {

  private readonly API_URL: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public getEverything(q?: string, page?: number, pageSize?: number): Observable<ArticleResponseModel> {
    let params: HttpParams | undefined;
    
    if (q && page && pageSize) {
      params = new HttpParams()
        .set('q', q)
        .set('page', String(page))
        .set('pageSize', String(pageSize));
    }
    
    return this.httpClient.get<ArticleResponseModel>(`${this.API_URL}/everything`, {
      responseType: 'json',
      params: params
    });
  }
}
