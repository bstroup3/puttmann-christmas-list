import { Component, Input } from '@angular/core';
import { Gift } from '../gift';

@Component({
  selector: 'app-gift',
  imports: [],
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.css'
})
export class GiftComponent {
  @Input() gift!: Gift;
}
