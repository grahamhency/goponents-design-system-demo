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
    { route: 'demo1', routeIcon: 'power_settings_new', routeTitle: 'Demo' }
  ];
}
