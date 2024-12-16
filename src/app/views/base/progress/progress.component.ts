import {Component} from '@angular/core';
import {DocsExampleComponent} from '@docs-components/public-api';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ProgressBarComponent,
  ProgressComponent as ProgressComponent_1,
  ProgressStackedComponent,
  RowComponent
} from '@coreui/angular';

@Component({
    selector: 'app-progress',
    templateUrl: './progress.component.html',
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ProgressComponent_1, ProgressBarComponent, ProgressStackedComponent]
})
export class ProgressComponent {

  value = 10;
  variant?: 'striped';

  constructor() {
    setTimeout(() => {
      this.value = 100;
      this.variant = 'striped';
    }, 3000);
  }

}
