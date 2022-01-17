import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: NewsComponent }]),
  ],
  exports: [NewsComponent],
})
export class NewsModule {}
