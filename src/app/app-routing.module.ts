import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableTestComponent } from './features/components/table-test/table-test.component';


const routes: Routes = [
  { path: 'demo1', component: TableTestComponent },
  { path: '', component: TableTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
