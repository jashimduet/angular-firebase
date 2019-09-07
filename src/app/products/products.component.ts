
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
items: Observable<any[]>;
  
  constructor(private product:ProductService) {
    //this.items = db.collection('products').valueChanges();
    this.items=this.product.getProducts();
  }
ngOnInit() {
  }
}


