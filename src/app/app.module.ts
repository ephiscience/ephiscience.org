import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
import { reducers, metaReducers } from './reducers'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavbarComponent } from './navbar/navbar.component'
import { IndexComponent } from './index/index.component'
import { JumbotronComponent } from './jumbotron/jumbotron.component'
import { CardComponent } from './card/card.component'
import { CardTitleComponent } from './card-title/card-title.component'
import { CardContentComponent } from './card-content/card-content.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    JumbotronComponent,
    CardComponent,
    CardTitleComponent,
    CardContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
