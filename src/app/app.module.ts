import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from './material.module';
import { IdeaComponent } from './idea/idea.component';
import { RegisterBusinessComponent } from './idea/register-business/register-business.component';
import { BusinessPlanComponent } from './idea/business-plan/business-plan.component';
import { BrandAssetsComponent } from './idea/brand-assets/brand-assets.component';
import { AppWebComponent } from './idea/app-web/app-web.component';
import { FundComponent } from './idea/fund/fund.component';
import { BusinessComponent } from './business/business.component';
import { RebrandingComponent } from './business/rebranding/rebranding.component';
import { LogoMarkComponent } from './business/rebranding/logo-mark/logo-mark.component';
import { ColorPaletteComponent } from './business/rebranding/color-palette/color-palette.component';
import { WebUpdateComponent } from './business/rebranding/web-update/web-update.component';
import { GraphicDesignComponent } from './business/rebranding/graphic-design/graphic-design.component';
import { CustomDesignComponent } from './business/rebranding/custom-design/custom-design.component';
import { GrowthStrategyComponent } from './business/growth-strategy/growth-strategy.component';
import { PlatformRefreshComponent } from './business/platform-refresh/platform-refresh.component';
import { DigitalMarketingComponent } from './business/digital-marketing/digital-marketing.component';
import { SeoStrategyComponent } from './business/seo-strategy/seo-strategy.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaComponent,
    RegisterBusinessComponent,
    BusinessPlanComponent,
    BrandAssetsComponent,
    AppWebComponent,
    FundComponent,
    BusinessComponent,
    RebrandingComponent,
    LogoMarkComponent,
    ColorPaletteComponent,
    WebUpdateComponent,
    GraphicDesignComponent,
    CustomDesignComponent,
    GrowthStrategyComponent,
    PlatformRefreshComponent,
    DigitalMarketingComponent,
    SeoStrategyComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
