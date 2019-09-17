import { Component } from '@angular/core';
import { NavGroup, NavItem } from '@tangoe/goponents';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'design-system-test';

  menuItems: Array<NavGroup | NavItem> = [
    { route: 'table-demo', routeIcon: 'power_settings_new', routeTitle: 'Table Demo' },
    { route: 'toast-demo', routeIcon: 'local_bar', routeTitle: 'Toast Demo' }
  ];
}
