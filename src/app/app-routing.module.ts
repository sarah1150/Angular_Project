import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGourd } from './components/signup/auth.gourd';

const appRoutes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
    canActivate: [AuthGourd],
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./components/aboutus/aboutus.module').then(
        (m) => m.AboutUsModule
      ),
  },

  {
    path: 'news',
    loadChildren: () =>
      import('./components/news/news.module').then((m) => m.NewsModule),
  },

  {
    path: 'list',
    loadChildren: () =>
      import('./components/userslist/userlist.module').then(
        (m) => m.UserslistModule
      ),
  },

  {
    path: 'user/:id',
    loadChildren: () =>
      import('./components/user-detail/user-detail.module').then(
        (m) => m.UserDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
