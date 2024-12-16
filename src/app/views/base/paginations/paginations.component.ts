import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DocsExampleComponent} from '@docs-components/public-api';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  PageItemComponent,
  PageLinkDirective,
  PaginationComponent,
  RowComponent
} from '@coreui/angular';

@Component({
    selector: 'app-paginations',
    templateUrl: './paginations.component.html',
    styleUrls: ['./paginations.component.scss'],
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, PaginationComponent, PageItemComponent, PageLinkDirective, RouterLink]
})
export class PaginationsComponent {

  constructor() { }

}
