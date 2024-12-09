import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { parseString } from 'xml2js';

@Injectable({
  providedIn: 'root',
})
export class FinnkinoService {
  private url = 'https://www.finnkino.fi/xml/News/'; 

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<any> {
    return this.httpClient.get(this.url, { responseType: 'text' }).pipe(
      map((response: string) => {
        let newsData: any;
        parseString(response, { trim: true, explicitArray: false }, (err, result) => {
          if (err) {
            console.error('XML parsing failed:', err);
            return;
          }
          newsData = result.News.NewsArticle.map((article: any) => ({
            Title: article.Title,
            ImageURL: article.ImageURL,
            PublishDate: article.PublishDate, 
          }));
        });
        return newsData;
      })
    );
  }
}
