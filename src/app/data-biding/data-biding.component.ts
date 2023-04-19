import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Mariana";
  public idade: number = 36;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;
  public ImgSrc: string = "https://www.google.com/logos/fnbx/animal_paws/cat_kp_dm.gif";
  public imgTitle: string = "Propperty Binding";

  //tipando
  public position: {x: number, y: number} =  {x: 0, y: 0};
  //ou sem tipar
  //public position: any;

  constructor() {}

  public alertaInfo(valor:string){
    alert(valor);
  }

  public alertaInfo2(valor:MouseEvent){
    console.log(valor);
  }

  public mouseMoveTeste(valor:MouseEvent){
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

  ngOnInit(): void {
    
  }
}
