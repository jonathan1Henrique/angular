import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-directive',
  templateUrl: './ng-class-directive.component.html',
  styleUrls: ['./ng-class-directive.component.css']
})
export class NgClassDirectiveComponent implements OnInit {

  constructor() { }

  favorito: boolean = false

  ngOnInit(): void {
  }
  onClick(){
    this.favorito = !this.favorito
  }

}
