import {Component} from '@angular/core';
import {DocsExampleComponent} from '@docs-components/public-api';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  SpinnerComponent
} from '@coreui/angular';

@Component({
    selector: 'app-spinners',
    templateUrl: './spinners.component.html',
    styleUrls: ['./spinners.component.scss'],
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, SpinnerComponent, ButtonDirective]
})
export class SpinnersComponent {

  constructor() { }

}
