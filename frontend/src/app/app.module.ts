import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";

import { FormsModule } from '@angular/forms';

import { EditorModule } from "@tinymce/tinymce-angular";
import { NgxEchartsModule } from 'ngx-echarts';

import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TeamComponent } from './team/team.component';
import { AthleteComponent } from './athlete/athlete.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { authInterceptorProviders } from "./service/auth-interceptor.service";
import { CommaPipe } from './comma.pipe';
import { RowingComponent } from './rowing/rowing.component';
import { RowingInputComponent } from './rowing-input/rowing-input.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    TeamComponent,
    AthleteComponent,
    EventsComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    CommaPipe,
    RowingComponent,
    RowingInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EditorModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
