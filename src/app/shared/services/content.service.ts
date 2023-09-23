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
    return of([
      {
        title: 'Texto simples com uma expressão matemática',
        description: 'A ala pediátrica de um hospital tem $40m^2$',
      },
      {
        title: 'Equação Matemática',
        description: '$(a+b)^{2} = a^{2} + ab + b^{2}$',
      },
      {
        title: 'Lista simples',
        description: '1. Ordered list\n2. Another bullet point',
      },
      {
        title: 'Imagem',
        description:
          "![The San Juan Mountains are beautiful!](assets/images/mountains.jpg 'San Juan Mountains')",
      },
    ]);
  }
}
