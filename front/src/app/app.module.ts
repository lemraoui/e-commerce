import { Product } from './classes/product';
import { Category } from './classes/category';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JwPaginationComponent } from 'jw-angular-pagination';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { FicheCategoryComponent } from './fiche-category/fiche-category.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserConnectComponent } from './user-connect/user-connect.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ShoppingCartComponent,
    HeaderComponent,
    FooterComponent,
    SingleItemComponent,
    FicheCategoryComponent,
    UserCreateComponent,
    UserProfileComponent,
    SideBarComponent,
    JwPaginationComponent,
    UserConnectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    Product,
    Category
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }