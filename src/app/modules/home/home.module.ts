import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './page/home.page';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomeRoutingModule, MarkdownModule.forChild()],
  exports: [],
})
export class HomeModule {}
