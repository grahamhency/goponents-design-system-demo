import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTestComponent } from './components/table-test/table-test.component';
import { GoTableModule, GoIconButtonModule, GoLoaderModule, GoToastModule } from '@tangoe/goponents';
import { PokeService } from './services/poke.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastTestComponent } from './components/toast-test/toast-test.component';

@NgModule({
  declarations: [TableTestComponent, ToastTestComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    GoIconButtonModule,
    GoLoaderModule,
    GoTableModule,
    GoToastModule
  ],
  providers: [
    PokeService
  ]
})
export class FeaturesModule { }
