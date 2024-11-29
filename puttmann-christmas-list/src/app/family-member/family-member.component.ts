import { Component, Input, inject} from '@angular/core';
import { FamilyMember } from '../family-member';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-member',
  imports: [],
  templateUrl: './family-member.component.html',
  styleUrl: './family-member.component.css'
})
export class FamilyMemberComponent {
  @Input() familyMember!: FamilyMember;
  router = inject(Router)
  navigateToWishlist()
  {
    this.router.navigateByUrl(`/${this.familyMember.id}`);
  }
}