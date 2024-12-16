import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DocsExampleComponent} from '@docs-components/public-api';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  NavComponent,
  NavItemComponent,
  NavLinkDirective,
  RowComponent
} from '@coreui/angular';

@Component({
    selector: 'app-navs',
    templateUrl: './navs.component.html',
    styleUrls: ['./navs.component.scss'],
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, NavComponent, NavItemComponent, NavLinkDirective, RouterLink, DropdownComponent, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective]
})
export class NavsComponent {

  constructor() { }
}

