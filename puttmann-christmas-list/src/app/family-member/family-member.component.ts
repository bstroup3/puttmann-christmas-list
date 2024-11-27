import { Component, Input} from '@angular/core';
import { FamilyMember } from '../family-member';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-family-member',
  imports: [RouterModule],
  templateUrl: './family-member.component.html',
  styleUrl: './family-member.component.css'
})
export class FamilyMemberComponent {
  @Input() familyMember!: FamilyMember;
}
