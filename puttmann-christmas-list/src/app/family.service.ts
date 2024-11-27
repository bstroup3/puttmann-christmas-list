import { Injectable } from '@angular/core';
import { FamilyMember } from './family-member';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  url = 'http://localhost:3000/family-members'

  constructor() 
  {

  }

  async getAllFamilyMembers() : Promise<FamilyMember[]>
  {
    const data = await fetch(this.url)
    return await data.json() ?? [];
  }

  async getFamiltMemberById(id: number) : Promise<FamilyMember | undefined>
  {
    const data = await fetch(`${this.url}/${id}`);

    return await data.json() ?? {};
  }
}
