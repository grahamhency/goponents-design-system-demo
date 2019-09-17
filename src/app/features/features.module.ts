import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTestComponent } from './components/table-test/table-test.component';
import { GoTableModule, GoIconButtonModule, GoLoaderModule } from '@tangoe/goponents';
import { PokeService } from './services/poke.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TableTestComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    GoIconButtonModule,
    GoLoaderModule,
    GoTableModule
  ],
  providers: [
    PokeService
  ]
})
export class FeaturesModule { }
