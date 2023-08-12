import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from '../data';
import { Tags } from '../shared/models/Tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }

  getFoodFromSearch(food:string):Food[]{
    return this.getAll().filter(x=>x.name.toLowerCase().includes(food.toLowerCase()));
  }

  getAllTags():Tags[]{
    return sample_tags;
  }

  getAllFoodByTag(tag:string):Food[]{
    return tag=="All" ? this.getAll() : this.getAll().filter(x=>x.tags?.includes(tag));
  }

  getFoodById(id:string):Food{
    return this.getAll().find(x=>x.id==id) ?? new Food();
  }
}
