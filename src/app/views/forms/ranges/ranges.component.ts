import {Component} from '@angular/core';
import {DocsExampleComponent} from '@docs-components/public-api';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormLabelDirective,
  RowComponent
} from '@coreui/angular';

@Component({
    selector: 'app-ranges',
    templateUrl: './ranges.component.html',
    styleUrls: ['./ranges.component.scss'],
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, FormLabelDirective, FormControlDirective]
})
export class RangesComponent {

  constructor() { }

}
