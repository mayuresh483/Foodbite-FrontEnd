import { HttpErrorResponse } from '@angular/common/http';
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
    console.log(params['id']);
      if(params['id']!=null){
        this.foodService.getFoodById(params['id']).subscribe((food)=>{
            this.food = food;
        },(err:HttpErrorResponse)=>{
          alert("Unable to fetch the data");
        });
        console.log();
      }
    })
  }

  addToCart():void{
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
