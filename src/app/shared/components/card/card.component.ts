import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
})
export class CardComponent {
  readonly name = input<string>('');
  readonly price = input<number>(0);
  readonly imageUrl = input<string>('');
}
