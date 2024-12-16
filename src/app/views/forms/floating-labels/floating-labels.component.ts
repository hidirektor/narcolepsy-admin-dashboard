import {Component} from '@angular/core';
import {NgStyle} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DocsExampleComponent} from '@docs-components/public-api';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormFloatingDirective,
  FormLabelDirective,
  FormSelectDirective,
  GutterDirective,
  RowComponent
} from '@coreui/angular';

@Component({
    selector: 'app-floating-labels',
    templateUrl: './floating-labels.component.html',
    styleUrls: ['./floating-labels.component.scss'],
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, FormFloatingDirective, FormControlDirective, FormLabelDirective, ReactiveFormsModule, FormsModule, FormDirective, NgStyle, FormSelectDirective, GutterDirective]
})
export class FloatingLabelsComponent {

  constructor() { }

}
