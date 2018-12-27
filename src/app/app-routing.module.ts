import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaComponent } from './idea/idea.component';
import { BusinessComponent } from './business/business.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RegisterBusinessComponent } from './idea/register-business/register-business.component';
import { BusinessPlanComponent } from './idea/business-plan/business-plan.component';
import { BrandAssetsComponent } from './idea/brand-assets/brand-assets.component';
import { AppWebComponent } from './idea/app-web/app-web.component';
import { FundComponent } from './idea/fund/fund.component';
import { RebrandingComponent } from './business/rebranding/rebranding.component';
import { GrowthStrategyComponent } from './business/growth-strategy/growth-strategy.component';
import { PlatformRefreshComponent } from './business/platform-refresh/platform-refresh.component';
import { DigitalMarketingComponent } from './business/digital-marketing/digital-marketing.component';
import { SeoStrategyComponent } from './business/seo-strategy/seo-strategy.component';
import { LogoMarkComponent } from './business/rebranding/logo-mark/logo-mark.component';
import { ColorPaletteComponent } from './business/rebranding/color-palette/color-palette.component';
import { WebUpdateComponent } from './business/rebranding/web-update/web-update.component';
import { GraphicDesignComponent } from './business/rebranding/graphic-design/graphic-design.component';
import { CustomDesignComponent } from './business/rebranding/custom-design/custom-design.component';


const routes: Routes = [
{ path: 'idea', component: IdeaComponent },
{ path: 'business', component: BusinessComponent },
{ path: 'offers', component: OffersComponent },
{ path: 'signin', component: SigninComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'register-business', component: RegisterBusinessComponent },
{ path: 'business-plan', component: BusinessPlanComponent },
{ path: 'brand-assets', component: BrandAssetsComponent },
{ path: 'app-web', component: AppWebComponent },
{ path: 'fund', component: FundComponent },
{ path: 'rebranding', component: RebrandingComponent },
{ path: 'growth-strategy', component: GrowthStrategyComponent },
{ path: 'platform-refresh', component: PlatformRefreshComponent },
{ path: 'digital-marketing', component: DigitalMarketingComponent },
{ path: 'seo-strategy', component: SeoStrategyComponent },
{ path: 'logo-mark', component: LogoMarkComponent },
{ path: 'color-palette', component: ColorPaletteComponent },
{ path: 'web-update', component: WebUpdateComponent },
{ path: 'graphic-design', component: GraphicDesignComponent },
{ path: 'custom-design', component: CustomDesignComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
