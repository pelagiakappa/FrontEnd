import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {
  }

  storeServers(servers: any[]) {
    // post request to store some data
    return this.http.post('https://udemy-ng-http.firebaseio.com/data.json', servers); // TODO  returns an observable to subscribe
  }
}
