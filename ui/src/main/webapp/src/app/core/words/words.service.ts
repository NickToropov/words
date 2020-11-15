import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IWord, IUpdateMessage } from './words.model';
import { environment as env } from '../../../environments/environment';
import Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';


const SERVER_URL = 'http://localhost:8089/gs-guide-websocket';

@Injectable()
export class WordsService {
  private resourceUrl = `${env.baseUrl}/words`;

  public updateEvents: Subject<IUpdateMessage>;

  private stompClient;

  constructor(private http: HttpClient) {
    this.updateEvents = new Subject<IUpdateMessage>();

    const ws = new SockJS(SERVER_URL);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/topic/words', (message) => {
        if (message.body) {
          this.updateEvents.next(JSON.parse(message.body));
        }
      });
    });
  }

  getAll(): Observable<IWord[]> {
    return this.http.get<IWord[]>(this.resourceUrl);
  }

  getWord(id) : Observable<IWord> {
    return this.http.get<IWord>(`${this.resourceUrl}/${id}`);
  }

  save(word: IWord): Observable<IWord> {
    return this.http.post<IWord>(this.resourceUrl, word);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }
}
