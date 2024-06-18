import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children: [
      /*{
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
      },*/
      {
        path: 'gifts/:id',
        loadChildren: () => import('./pages/item-detail/item-detail.module').then( m => m.ItemDetailPageModule)
      },
    ],

  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },

  {
    path: 'map-leaflet',
    loadChildren: () => import('./pages/map-leaflet/map-leaflet.module').then( m => m.MapLeafletPageModule)
  },
  {
    path: 'map-leaflet/:id',
    loadChildren: () => import('./pages/map-leaflet/map-leaflet.module').then( m => m.MapLeafletPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
