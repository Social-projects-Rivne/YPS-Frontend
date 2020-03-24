import { IChildOfParent } from './IChildOfParent';

export interface IParent {
	id : number;
	firstName : string;
	surname : string;
	middleName : string;
	phoneNumber: string;
	dateOfBirth: string;
	email : string;
	imageUrl: string;
	children : IChildOfParent[];
	workInfo : string;
}