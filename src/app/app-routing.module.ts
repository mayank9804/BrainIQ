import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { HeroRouteGuard } from './core/hero.guard.service';

const routes: Routes = [
  {
      path:'',
      component:HeroComponent,
      canActivate:[HeroRouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
