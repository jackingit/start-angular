import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-techcart',
  templateUrl: './techcart.component.html',
  styleUrls: ['./techcart.component.css']
})
export class TechcartComponent implements OnInit {
  items;
  constructor(private cartService: CartServiceService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  tongtien(){
    let s=0;
    for(let i=0; i< this.items.length; i++){
      s+=this.items[i].quantity * this.items[i].price;
    }
    return s;
  }
  tangsl(id){
    for(let i=0; i< this.items.length; i++){ 
      if(this.items[i].id==id){       
        this.items[i].quantity++;
      }
    }
  }
  giamsl(id){
    for(let i=0; i< this.items.length; i++){
      if(this.items[i].id==id && this.items[i].quantity > 0){
        this.items[i].quantity--;
      }
    }
  }
  DeleteItem(id){
    this.cartService.DeleteItem(id);
  }
  ktra(){
    if(this.items.length>0){
      return true;
    }
    else{
      return false;
    }
  }
}
