import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.css']
})
export class FooddetailsComponent {
  food?:any;

  constructor(activatedRoute:ActivatedRoute, private foodService:FoodService, 
    private cartService: CartService, private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id']!=null){
        this.food = this.foodService.getFoodById(params['id']);
        console.log(this.food);
      }
    })
  }

  addToCart():void{
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
