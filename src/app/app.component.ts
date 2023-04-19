import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <app-diretivas-estruturais></app-diretivas-estruturais>
  
  <router-outlet></router-outlet>
  `
  //aulas anteriores
  //<app-title *ngIf="destruir"></app-title>
  //<button (click) = "destruirComponent()" >Destruir Título</button>  
  //<br>
  //<br>
  //{{valor}} <button (click)="adicionar()">Adicionar</button>
  //<br>
  //<br>
  //<app-data-biding></app-data-biding>
  //<router-outlet></router-outlet>
  //  `

  //aulas anteriores
  //`
  //<app-title> *ngIf="destruir" </app-title>
  //<br>
  //{{valor}} <button (click)="adicionar()">Adicionar</button>
  //<br>
  ///<br>
  //<button (click) = "destruirComponent()" >Destruir componente</button>  
  //<router-outlet></router-outlet>
  //`
  
})

export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
 
  public valor: number = 1;

  public destruir:boolean = true;

  constructor(){}

  public adicionar() : number{
    return this.valor += 1;

  }

  ngOnInit(): void {}

  //-------------------------------------------------------------------------------------
  //exemplo de onInit onde aguarda 5 milisegundos para exibição do log (F12 no navegador)
  //ngOnInit(): void {
  //  setTimeout(() => {
  //    console.log("1 teste log");
  //  }, 5000)  
  //}
  //-------------------------------------------------------------------------------------
  
  ngDoCheck(): void {
    console.log("log ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("log ngAfterContentInit");
  }
  
  ngAfterContentChecked(): void {
    console.log("log ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("log ngAfterViewInit");
  }
  
  ngAfterViewChecked(): void {
    console.log("log ngAfterViewChecked");
  } 

  //-------------------------------------------------------------------------------------
  //Destruir componente

  public destruirComponent(){
    this.destruir = false;
  }

  //-------------------------------------------------------------------------------------

  //title = 'Bem vindo!';
}
