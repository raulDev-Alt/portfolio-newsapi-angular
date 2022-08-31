import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/core/models/article.model';
import { NewzService } from 'src/app/core/services/newz.service';

@Component({
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  articles?: ArticleModel[];
  
  searchString: string = '';
  
  //pagination props
  currentPage: number = 1;
  pageSizes: number[] = [10, 25, 50];
  pageSize: number = 10;
  totalPages: number = 1;

  constructor(private newzService: NewzService) { }

  ngOnInit(): void {
    this.getEverything();
  }

  getEverything(q?: string, page?: number, pageSize?: number) {
    this.newzService.getEverything(q, page, pageSize).subscribe(
      articles => this.articles = articles
    );
  }

  // PAGINATION
  switchPageSize() {
    this.getEverything()
  }

  firstPage() {
    this.getEverything()
  }

  previousPage() {
    this.getEverything()
  }

  nextPage() {
    this.getEverything()
  }

  lastPage() {
    this.getEverything()
  }
}
