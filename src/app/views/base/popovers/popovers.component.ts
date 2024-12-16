import {Component, OnInit} from '@angular/core';
import {DocsExampleComponent} from '@docs-components/public-api';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  PopoverDirective,
  RowComponent
} from '@coreui/angular';

@Component({
    selector: 'app-popovers',
    templateUrl: './popovers.component.html',
    styleUrls: ['./popovers.component.scss'],
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ButtonDirective, PopoverDirective]
})
export class PopoversComponent implements OnInit {

  visible = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.visible = !this.visible;
    }, 3000);
  }

}
