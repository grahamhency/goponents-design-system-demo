import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableTestComponent } from './features/components/table-test/table-test.component';
import { ToastTestComponent } from './features/components/toast-test/toast-test.component';


const routes: Routes = [
  { path: 'table-demo', component: TableTestComponent },
  { path: 'toast-demo', component: ToastTestComponent },
  { path: '', redirectTo: 'table-demo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
