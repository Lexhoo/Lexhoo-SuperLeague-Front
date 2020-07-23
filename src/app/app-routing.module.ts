import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { TeamListComponent } from './team-list/team-list.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { TeamProfilComponent } from './team-profil/team-profil.component';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { SuperleagueComponent } from './superleague/superleague.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'teams', component: TeamListComponent },
  { path: 'newplayer', component: SuperleagueComponent },
  { path: 'players', component: PlayerListComponent },
  { path: 'teamprofil', component: TeamProfilComponent },
  { path: 'createteam', component: CreateTeamComponent },
  { path: 'shoes', component: ShoesListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  // { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TeamListComponent,
                                  PlayerListComponent,
                                ShoesListComponent]
