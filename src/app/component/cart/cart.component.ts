import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Router } from '@angular/router';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['name', 'unit_price', 'quantity', 'subtotal'];
  dataSource = this.cartService.cartItems ?? [];

  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    if (this.cartService.cartItems) {
      this.dataSource = this.cartService.cartItems;
    } else {
      this.dataSource = []; // ou algum outro valor padrão
    }
  }

  changeDeliveryOption(event: MatRadioChange): void {
    this.cartService.setDeliveryOption(event.value);
  }

  decreaseItemQuantity(productId: string): void {
    this.cartService.decreaseItemQuantity(productId);
  }

  increaseItemQuantity(productId: string): void {
    this.cartService.increaseItemQuantity(productId);
  }

  checkout(): void {
    this.cartService.clearCart();
    this.router.navigate(['/shipping']);
  }

  addMoreItems(): void {
    this.router.navigate(['/']); // Altere o caminho de rota para a página desejada
  }
}
