import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-exp',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './directive-exp.html',
  styleUrl: './directive-exp.css',
})
export class DirectiveExp {

  divClassName: string = "bg-success";
  isCheckActive: boolean = true;
  text: string = '';
  pickColor: string = "";
  divStyle: any;


  divColorChange(className: string){
    this.divClassName = className;
  }

  setStyle(shape: string){
    if(shape=='circle'){
      this.divStyle = {
        'background-color': 'green',
        height: '200px',
        width: '200px',
        'border-radius': '50%'
      };
    }else{
      this.divStyle = {
        'background-color': 'pink',
        height: '200px',
        width: '200px',
      };
    }
  }

}
