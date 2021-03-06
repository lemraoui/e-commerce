import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from '../services/product.service';
import { UserServiceService } from '../services/user-service.service';
import { sessionGlobalUser, sessionGlobalCart } from './../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  name;
  products;
  categories;
  activeUser;
  activeCart;

  constructor(private cS: CategoryService, private pS: ProductService, private uS: UserServiceService) { }

  ngOnInit() {
    this.name='';
    this.cS.getCategory().subscribe(data => {this.categories = data; });
    this.activeUser = sessionGlobalUser.activeUser ? sessionGlobalUser.activeUser._id : null;
    this.activeCart = sessionGlobalCart.activeCart ? sessionGlobalCart.activeCart._id : null;
  }

  ngOnChange(){
    this.activeUser = sessionGlobalUser.activeUser ? sessionGlobalUser.activeUser._id : null;
    this.activeCart = sessionGlobalCart.activeCart ? sessionGlobalCart.activeCart._id : null;
  }

  getProduct(){
    if(this.name != ''){
      this.pS.getProductsByName(this.name).subscribe(data => this.products = data);
    }
  }

  logoutUser(){
    this.uS.logoutUser(sessionGlobalUser.activeUser);
  }
}