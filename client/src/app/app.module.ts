import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckPipe } from './check.pipe';
import { FilterUserPipe } from './filter-user.pipe';
import { GetNamePipe } from './get-name.pipe';
import { GetUserBucketsPipe } from './get-user-buckets.pipe'

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ShowComponent,
    DashboardComponent,
    CheckPipe,
    FilterUserPipe,
    GetNamePipe,
    GetUserBucketsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
