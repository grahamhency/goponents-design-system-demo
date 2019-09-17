import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { GoLayoutModule, GoHeaderModule, GoSideNavModule } from '@tangoe/goponents';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    AppRoutingModule,
    // Goponents Stuff
    GoLayoutModule,
    GoHeaderModule,
    GoSideNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
