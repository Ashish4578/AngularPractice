import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.css'
})
export class SearchProductComponent {
  title = 'Product Search';
  products = ['Laptop', 'Smartphone', 'Tablet', 'Monitor', 'Keyboard'];
  searchTerm: string = '';

  get filteredProducts() {
    return this.products.filter(product =>
      product.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}