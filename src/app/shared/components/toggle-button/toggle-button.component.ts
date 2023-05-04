import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'shared-toggle-button',
  templateUrl: './toggle-button.component.html',
  styles: [],
})
export class ToggleButtonComponent {
  public checked = this.themeService.themeSelection;

  constructor(private themeService: ThemeService) {}

  changeTheme(theme: boolean): void {
    this.themeService.switchTheme(this.checked);
  }
}
