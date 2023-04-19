import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title:string = "Mari Pereira te deseja Boas Vindas! \o/";

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {}
  ngOnDestroy(): void {
    console.log("Componente de título destruído");
  }

  //-------------------------------------------------------------------------------------
  //exemplo de OnChanges com input de dados aqui no código
  //ngOnChanges(): void {
  //  alert("foi alterado com sucesso")
  //}
  //-------------------------------------------------------------------------------------
 
}
