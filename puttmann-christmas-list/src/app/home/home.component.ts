import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FamilyMemberComponent } from '../family-member/family-member.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, FamilyMemberComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  family = [
    { 
      name: 'Shawn',
      gifts: []
    },
    { 
      name: 'Sara',
      gifts: []
    },
    { 
      name: 'Kaitlyn',
      gifts: []
    },
    { 
      name: 'Jadan',
      gifts: []
    },
    { 
      name: 'Ben',
      gifts: []
    },
    { 
      name: 'Kennedy',
      gifts: []
    },
    { 
      name: 'Avery',
      gifts: []
    },
  ]
}
