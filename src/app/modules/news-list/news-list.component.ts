import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/core/models/article.model';
import { NewzService } from 'src/app/core/services/newz.service';
import { finalize, map } from 'rxjs/operators';

@Component({
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  loading: boolean = false;

  articles?: ArticleModel[];
  
  currentSearch: string = '';
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
    this.loading = true;

    this.newzService.getEverything(q, page, pageSize)
    .pipe(
      map(articleResponse => {
        const totalPages = Math.ceil(articleResponse.totalResults / this.pageSize);
        if (this.currentPage > totalPages) {
          this.currentPage = totalPages;
        }

        this.totalPages = totalPages;

        return articleResponse.articles;
      }),
      finalize(() => this.loading = false)
    ).subscribe(
      articles => this.articles = articles
    );
  }

  search() {
    if (this.searchString && this.searchString.length > 3) {
      this.currentSearch = this.searchString;
      this.getEverything(this.searchString, this.currentPage, this.pageSize);
    }
  }

  // PAGINATION
  switchPageSize(size: string) {
    this.pageSize = +size;
    this.getEverything(this.currentSearch, this.currentPage, this.pageSize);
  }

  firstPage() {    
    this.getEverything(this.currentSearch, 1, this.pageSize);
  }

  previousPage() {
    this.getEverything(this.currentSearch, this.currentPage - 1, this.pageSize);
  }

  nextPage() {
    this.getEverything(this.currentSearch, this.currentPage + 1, this.pageSize);
  }

  lastPage() {
    this.getEverything(this.currentSearch, this.totalPages, this.pageSize);
  }
}
