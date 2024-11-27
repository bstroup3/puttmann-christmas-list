import { Gift } from "./gift";

export interface FamilyMember {
    id: number
    name: string;
    gifts: Gift[]
}
