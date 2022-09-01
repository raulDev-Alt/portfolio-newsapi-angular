import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent implements OnInit {

  @Input() imageURL?: string;

  @Input() title?: string;
  
  @Input() description?: string;

  @Input() author: string = 'Unknown';

  @Input() fullArticleAddress?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
