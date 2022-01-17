import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserslistComponent } from './userslist.component';

@NgModule({
  declarations: [UserslistComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserslistComponent,
      },
    ]),
  ],
  exports: [UserslistComponent],
})
export class UserslistModule {}
