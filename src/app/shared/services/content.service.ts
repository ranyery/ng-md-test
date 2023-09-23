// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IContent } from '../interfaces/content.interface';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  // private _http = inject(HttpClient);

  constructor() {}

  public getAll(): Observable<IContent[]> {
    return of<IContent[]>([
      {
        title: 'A ala pediátrica de um hospital tem $40m^2$',
      },
    ]);
  }
}
