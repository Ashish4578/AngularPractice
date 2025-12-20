import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myProject01';
  name = 'Ashish Gadekar';
  num1: number =0;
  num2: number =0;
  result: number  | string = 0 ;

  add(){
    this.result = this.num1 + this.num2;
  }
  subtract(){
    this.result = this.num1 - this.num2;
  }
  multiply(){
    this.result = this.num1 * this.num2;
  }
  divide(){
    if(this.num2 != 0){
      this.result = this.num1 / this.num2;
    } else {
      this.result = 'Error: Division by zero';
    }
  }

}
