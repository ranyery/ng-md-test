import { Component, inject, OnInit } from '@angular/core';
import { IContent } from 'src/app/shared/interfaces/content.interface';
import { ContentService } from 'src/app/shared/services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private readonly _contentService = inject(ContentService);

  public content: IContent[] = [];

  constructor() {}

  ngOnInit(): void {
    this._contentService.getAll().subscribe({
      next: (contentData) => {
        this.content = contentData;
      },
      error: () => {},
    });
  }
}
