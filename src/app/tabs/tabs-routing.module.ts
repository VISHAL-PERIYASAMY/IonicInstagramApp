import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'message',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../message/message.module').then(m => m.MessagePageModule)
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../login/login.module').then(m => m.LoginPageModule)
          }
        ]
      },
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab4/tab4.module').then(m => m.Tab4PageModule)
          }
        ]
      },
      {
        path: 'tab5',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab5/tab5.module').then(m => m.Tab5PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
