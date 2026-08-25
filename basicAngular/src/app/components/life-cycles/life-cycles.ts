import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycles',
  imports: [],
  templateUrl: './life-cycles.html',
  styleUrl: './life-cycles.css',
})
export class LifeCycles implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy{
  /*
  
  */
  constructor(){
    // Constructor logic
    console.log("Constructor executed..")
  }

  ngOnInit(): void {
    // Initialization logic
    console.log("ngOnInit executed..")
  }

  ngDoCheck(): void {
    // Custom change detection logic
    console.log("ngDoCheck executed..");
  }

  ngAfterContentChecked(): void {
    // Logic after content has been checked
    console.log("ngAfterContentChecked executed..")
  }

  ngAfterContentInit(): void {

    // Logic after content has been initialized
    console.log("ngAfterContentInit executed..")
  }

  ngAfterViewInit(): void {

    // Logic after view has been initialized
    console.log('ngAfterViewInit executed..')
  }

  ngOnDestroy(): void {
    // Logic for cleanup when component is destroyed

    console.log("ngOnDestroy executed..")
  }

}
