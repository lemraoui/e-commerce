import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from '../services/product.service';
import { sessionGlobal } from './../../environments/environment'

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

  constructor(private cS: CategoryService, private pS: ProductService) { }

  ngOnInit() {
    this.name='';
    this.cS.getCategory().subscribe(data => {this.categories = data; });
    this.activeUser = sessionGlobal.activeUser;
  }

  getProduct(){
    if(this.name != ''){
      this.pS.getProductsByName(this.name).subscribe(data => this.products = data);
    }
    
  }
}