export interface IUser {
    id: number;
    firstName: string;
    surname: string;
    middleName: string;
    email: string;
    dateOfBirth: string;
    phoneNumber: string;
    imageUrl: string;
    className?: string;
    degree?: string;
    schoolName?: string;
    workInfo?: string;
}
