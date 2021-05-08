import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-directive',
  templateUrl: './ng-style-directive.component.html',
  styleUrls: ['./ng-style-directive.component.css']
})
export class NgStyleDirectiveComponent implements OnInit {

  constructor() { }

  ativo: boolean = false;
  tamanhoFonte: number = 10

  ngOnInit(): void {
  }

  mudarAtivo(){
    this.ativo = !this.ativo
    
  }

}
