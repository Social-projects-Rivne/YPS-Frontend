export interface IUser {
    id: number;
    firstName: string;
    surname: string;
    middleName: string;
    email: string;
    className?: string;
    dateOfBirth: string; 
    imageUrl?: string;
    phoneNumber: string;
    degree?: string;
    schoolName?: string;
    children?: string[];
    workinfo?: string;
}