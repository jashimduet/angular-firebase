import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFirestore) { }

  addProduct(productData) {
    this.db.collection('products').add(productData).then(() => {
      console.log('Done');
    })
  }

  getProducts(){
    return this.db.collection('products', ref => ref.orderBy('price')).valueChanges();
  }
}
