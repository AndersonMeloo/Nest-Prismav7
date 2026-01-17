import { IsEmail, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name must be a string' })
  @MaxLength(50, {
    message: 'Name is too long. Maximum length is 50 characters.',
  })
  name: string;

  @IsEmail({}, { message: 'Invalid email format' })
  email: string;
}
