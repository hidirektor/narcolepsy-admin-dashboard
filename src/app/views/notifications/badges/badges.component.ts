import {Component} from '@angular/core';
import {DocsExampleComponent} from '@docs-components/public-api';
import {
  BadgeComponent,
  BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent
} from '@coreui/angular';

@Component({
    selector: 'app-badges',
    templateUrl: './badges.component.html',
    styleUrls: ['./badges.component.scss'],
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, BadgeComponent, ButtonDirective, BorderDirective]
})
export class BadgesComponent {

  constructor() { }

}
