import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent implements OnInit {
  productForm:FormGroup;

  constructor(private fb:FormBuilder,private product:ProductService) { }

  ngOnInit() {
    this.productForm=this.fb.group(
      {
        name:['',[Validators.required]],        
        description:[''],
        price:[''],        
        images:['']       
        
    }
    )
  }

  onSubmit(){
    let product=this.productForm.value ;
    this.product.addProduct(product);
  }

}


