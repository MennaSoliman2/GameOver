import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PlatformComponent } from './components/platform/platform.component';
import { SortComponent } from './components/sort/sort.component';
import { CategoryComponent } from './components/category/category.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes =[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard], component:HomeComponent},
  {path:'all',canActivate:[AuthGuard],component:AllGamesComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'platform',canActivate:[AuthGuard],component:PlatformComponent},
  {path:'sort',canActivate:[AuthGuard],component:SortComponent},
  {path:'cate',canActivate:[AuthGuard],component:CategoryComponent},
  {path:'details/:id',canActivate:[AuthGuard],component:GameDetailsComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
