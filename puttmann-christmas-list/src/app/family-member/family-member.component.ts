import { Component, Input} from '@angular/core';
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

  constructor(private router : Router){}

  navigateToWishlist()
  {
    this.router.navigate(['/', this.familyMember.id]);
  }
}
