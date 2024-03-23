import { IsNotEmpty, IsEmail, Matches, MinLength, MaxLength, IsString, IsNumberString   } from 'class-validator';

export class UpdateUserPhoneDto {
    @IsNotEmpty()
    @IsNumberString({}, { message: 'phone must be a numeric string' })
    @MaxLength(11, { message: 'Phone number must not be longer than 11 digits' })
    @MinLength(11, { message: 'Phone number must be 11 digits' })
    phone: string;
}

export class UpdateUsernameDto {
    @IsString()
    @Matches(/^[A-Za-z]+$/, {
        message: 'name must only contain alphabets',
    })
    @MinLength(4, {
        message: 'name must be at least 4 characters',
    })
    @MaxLength(20, {
        message: 'name must not be longer than 20 characters',
    })
    name: string;
}

export class UpdateUseremailDto {
    @IsEmail({}, { message: 'Invalid email format' })
    email: string;
}

export class UpdateUserpasswordDto {
@Matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/, {
    message: 'password must be at least 6 characters long and include at least one uppercase character, one number, and one special character',
})
password: string;
}
export class UpdateUserfnameDto {
    @IsString()
    @Matches(/^[A-Za-z]+$/, {
        message: 'fullName must only contain alphabets',
    })
    fullName: string;
    }




