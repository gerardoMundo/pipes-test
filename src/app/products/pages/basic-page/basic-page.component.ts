import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: [],
})
export class BasicPageComponent {
  public lower = 'gerardo';
  public upper = 'MUNDO';
  public title = 'gErArdO MuNdo';

  public customDate: Date = new Date();
}
