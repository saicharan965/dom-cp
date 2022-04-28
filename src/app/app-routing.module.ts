import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DomManipulationComponent } from './dom-manipulation/dom-manipulation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dom', pathMatch: 'full' },
  { path: 'dom', component: DomManipulationComponent },
  { path: 'contentProjection', component: ContentProjectionComponent },
  { path: '**', component: DomManipulationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
