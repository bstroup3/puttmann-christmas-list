import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FamilyMemberComponent } from '../family-member/family-member.component';
import { FamilyMember } from '../family-member';
import { FamilyService } from '../family.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule, FamilyMemberComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  family: FamilyMember[] = [];
  familyMemberService = inject(FamilyService)

  constructor()
  {
    this.familyMemberService.getAllFamilyMembers().then((familyMembers : FamilyMember[]) => 
    {
      this.family = familyMembers;
    })
  }
}
