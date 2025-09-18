import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html'
})
export class HeroesListComponent {

  imageWidth:number=100;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';
  

  showImage():void{
    this.muestraImage=!this.muestraImage;
  }


  heroes:any[]=[
    {
      imagen:"https://dragonball-api.com/transformaciones/Broly_DBS_Base.webp",
      nombre:"Broly",
      description:"Broly es un Saiyajin que posee un poder gigantesco e incontrolable, el cual se manifiesta en toda su magnitud cuando se convierte en el Super Saiyajin Legendario.",
      race:"Saiyan",
      ki:7000000000000000000
    },
    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
      nombre:"Goku",
      description:"El protagonista de la serie, conocido por su gran poder y personalidad amigable.",
      race:"Saiyan",
      ki:60000000
    },
    {
      imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre:"Vegeta",
      description:"Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters.",
      race:"Saiyan",
      ki:54000000
    },
    {
      imagen:"https://dragonball-api.com/transformaciones/gogeta.webp",
      nombre:"Gogeta",
      description:"Gogeta es la fusión resultante de Son Goku y Vegeta, cuando realizan la Danza de la Fusión correctamente para enfrentarse a Broly.",
      race:"Saiyan",
      ki:1500000000000000000000000000000000000000000
    }
  ]
}
