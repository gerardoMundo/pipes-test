import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styles: [],
})
export class CustomPipesComponent {
  public isUpperCase = false;
  public orderedBy: keyof Hero | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Green lantern',
      canFly: true,
      color: Color.green,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Aquaman',
      canFly: false,
      color: Color.blue,
    },
    {
      name: 'Wonder Woman',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Bird Girl',
      canFly: true,
      color: Color.blue,
    },
  ];

  onToggleCase() {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderedBy = value;
  }
}
