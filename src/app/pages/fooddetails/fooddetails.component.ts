import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.css']
})
export class FooddetailsComponent {
  food?:any;

  constructor(activatedRoute:ActivatedRoute, private foodService:FoodService){
    activatedRoute.params.subscribe((params)=>{
      if(params['id']!=null){
        this.food = this.foodService.getFoodById(params['id']);
        console.log(this.food);
      }
    })
  }
}
