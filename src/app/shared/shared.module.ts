import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './article-card/article-card.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [ArticleCardComponent, PaginationComponent],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
