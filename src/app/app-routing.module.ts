import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { fromPromise } from 'rxjs/internal-compatibility';

const routes: Routes = [
  { path: 'count', loadChildren: () => fromPromise(
      import('submodule' /* webpackChunkName: "counter-module" */)
        .then(({ CounterModule }) => CounterModule)
    )
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
