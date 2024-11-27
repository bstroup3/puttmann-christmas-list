import { Component, inject } from '@angular/core';
import { FamilyMember } from '../family-member';
import { FamilyService } from '../family.service';
import { ActivatedRoute } from '@angular/router';
import { GiftComponent } from '../gift/gift.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [GiftComponent, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  familyMember : FamilyMember | undefined;
  familyMemberService = inject(FamilyService)

  constructor()
  {
    const id = Number(this.route.snapshot.params['id']);
    this.familyMemberService.getFamiltMemberById(id).then(familyMember => 
    {
      this.familyMember = familyMember;
    }
    )
  }
}
