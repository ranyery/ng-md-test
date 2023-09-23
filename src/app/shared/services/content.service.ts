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
        title: 'Rich Text',
        description:
          '**(FUVEST SP)** O triângulo ACD é isósceles de base $\\overline{CD}$ e o segmento $\\overline{OA}$ é perpendicular ao plano que contém o triângulo OCD, conforme a figura:<br><br>![The San Juan Mountains are beautiful!](assets/images/pyramid.png "San Juan Mountains")<br><br>Sabendo-se que $AO=3$, $AC=5$ e $sen (O\\hat{C}D) = \\frac{1}{3}$, então a área do triângulo $OCD$ vale',
      },
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
      {
        title: 'Bold',
        description: 'I just love **bold text**.',
      },
      {
        title: 'Italic',
        description: "Italicized text is the *cat's meow*.",
      },
    ]);
  }
}
