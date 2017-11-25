import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { InterviewEffect } from './effects/interview';
import { SearchPageComponent } from './search-page.component';
import { PositionBoxComponent } from './position-box/position-box.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchQueryPipe } from './search-query.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: '', component: SearchPageComponent },
];


@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forFeature('interview', reducers),
    EffectsModule.forFeature([
      InterviewEffect
    ])
  ],
  declarations: [
    SearchPageComponent,
    PositionBoxComponent,
    SearchQueryPipe
  ],
  exports: [
    MatProgressSpinnerModule
  ],
})
export class SearchPageModule { }
