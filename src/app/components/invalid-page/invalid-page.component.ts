import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invalid-page',
  imports: [],
  templateUrl: './invalid-page.component.html',
  styleUrl: './invalid-page.component.scss',
})
export class InvalidPageComponent {

  private router = inject(Router);

  public backToMainPage(): void {
    this.router.navigate(['/vocabulary']);
  }
}
