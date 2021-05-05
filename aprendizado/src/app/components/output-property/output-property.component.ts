import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }

  @Input() valor:number = 0

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: any;

  ngOnInit(): void {
  }

  decrementa(){
    this.campoValorInput.nativeElement.value--
    this.mudouValor.emit({novoValor: this.valor});
  }
  incrementa(){
    this.campoValorInput.nativeElement.value++
    this.mudouValor.emit({novoValor: this.valor});
  }

}
