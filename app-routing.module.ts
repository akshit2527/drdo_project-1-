import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttackTableComponent } from './attack-table/attack-table.component';

const routes: Routes = [
  { path: 'attacks', component: AttackTableComponent },
  { path: '', redirectTo: 'attacks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
