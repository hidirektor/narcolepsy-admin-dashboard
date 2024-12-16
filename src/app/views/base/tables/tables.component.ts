import {Component} from '@angular/core';
import {DocsExampleComponent} from '@docs-components/public-api';
import {
  AlignDirective,
  BorderDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  TableActiveDirective,
  TableColorDirective,
  TableDirective
} from '@coreui/angular';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective]
})
export class TablesComponent {

  constructor() { }

}
