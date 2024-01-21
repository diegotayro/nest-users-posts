import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  username?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  password?: string;
}
