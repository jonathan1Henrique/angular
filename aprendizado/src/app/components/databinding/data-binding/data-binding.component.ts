import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  // nome: string = 'teste aqui ';

  nomeDoCurso: string = 'Angular'


  valorInicial: number = 15

  ngOnInit(): void {
  }

  onMudouValor(evento:any){
    console.log(evento.novoValor);
  }

}
