import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { UsersService } from 'src/app/services/users.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  order:Order= new Order();
  checkoutForm!:FormGroup;
  isSubmitted:boolean = false;

  constructor(private fb:FormBuilder,private cartService:CartService,
    private userService:UsersService, private toast:ToastrService){
      const cart = this.cartService.getCart;
      this.order.items = cart.items;
      this.order.totalPrice = cart.totalPrice;
    }

  ngOnInit(): void {
    let {name,address} = this.userService.currentUser;
    this.checkoutForm = this.fb.group({
      name:[name, Validators.required],
      address:[address,Validators.required]
    });
  }

  get f(){
    return this.checkoutForm.controls
  }

  createOrder(){
    this.isSubmitted= true;
    if(this.checkoutForm.invalid){ 
      this.toast.warning('Please fill the required Inputs','Invalid Inputs');
      return;
    }

    this.order.name = this.f.name.value;
    this.order.address = this.f.address.value;

    console.log(this.order);
  }
}
