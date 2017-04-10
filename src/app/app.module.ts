import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import { Location } from "@angular/common";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@angular/material";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalizeRouterModule, LocalizeParser, StaticParserLoader } from "localize-router";
import { Observable } from "rxjs/Observable";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContentComponent } from './shared/content/content.component';
import { LoginComponent } from './login/login.component';

import { FlexDirective } from './shared/directives/flex.directive';

import { AuthGuard } from "./shared/services/auth-guard.service";
import { AuthService } from "./shared/services/auth-service.service";
import { WallpaperDirective } from './shared/directives/wallpaper.directive';

export const routes: Routes = [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        pathMatch: 'full'
      },
      {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent
      },
      {
        path: '**',
        redirectTo:'',
        pathMatch: 'full',
      }
    ];
 
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    FlexDirective,
    WallpaperDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
    LocalizeRouterModule.forRoot(routes),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
