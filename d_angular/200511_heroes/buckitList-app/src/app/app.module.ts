import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BuckitListsComponent } from './layout/buckitlists/buckitlists.component';
import { BuckitListDetailComponent } from './layout/buckitlist-detail/buckitlist-detail.component';
import { MessageComponent } from './layout/message/message.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { BuckitListSearchComponent } from './layout/buckitlist-search/buckitlist-search.component';
import { RouteReuseStrategy } from '@angular/router';
import { CacheRouteReuseStrategy } from './cache-route-reuse.strategy';

@NgModule({
  declarations: [
    AppComponent,
    BuckitListsComponent,
    BuckitListDetailComponent,
    MessageComponent,
    DashboardComponent,
    BuckitListSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // HttpClientInMemoryWebApiModule 모듈은 HTTP 요청을 가로채고 서버의 응답을 흉내냅니다.
    // 실제 서버가 준비되면 이 부분을 제거하면 됩니다.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )

  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CacheRouteReuseStrategy,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
