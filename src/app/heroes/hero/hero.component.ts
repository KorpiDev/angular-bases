import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void{
    this.name = 'Spiderman'
  }

  changeAge(): void{
    this.age = 30;
  }

  resetForm(): void{
    this.age = 45;
    this.name = 'Ironman'
  }
}
