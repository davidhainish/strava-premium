import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SharedFeatureGlobalHeaderModule } from '@strava-premium/shared/feature/global-header';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        // {
        //   path: '',
        //   component: HomeComponent
        // },
        {
          path: '',
          redirectTo: '/coming-soon',
          pathMatch: 'full'
        },
        {
          path: 'coming-soon',
          component: ComingSoonComponent
        },
        {
          path: 'activity-feed',
          loadChildren: () =>
            import('activity-feed/Module').then((m) => m.RemoteEntryModule),
        },
        //TODO: Add NOT_FOUND component
        // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    SharedFeatureGlobalHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
