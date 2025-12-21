import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoComponent } from './todo/todo.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

export const routes: Routes = [
    { path: 'hello', component: HelloWorldComponent},
    { path: 'calculator', component: CalculatorComponent },
    { path: 'todo', component: TodoComponent },
    { path: 'welcome', component: WelcomePageComponent },
    { path: 'product', component: SearchProductComponent }
];
