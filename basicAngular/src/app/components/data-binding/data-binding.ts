import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  productName: string = 'Bottle';
  productPrice: number = 1000;
  maxCharAllowed: number = 5;

  dynamicTypeRadio = 'radio';
  dynamicTypeText = 'text';
  dynamicTypeCheckbox = 'checkbox';
  dynamicTypeButton = 'button';
  isProductAvailable: boolean = true;

  onClick(){
    alert('Button Clicked');
  }

  onSelectMenu(){
    alert('Menu Selected');
  }

  onMouseEnter(){
    console.log('Mouse Entered');
  }
  onMouseLeave(){
    console.log('Mouse Left');
  }
}
