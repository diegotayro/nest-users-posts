import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  firstname: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  lastname: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  @MinLength(3)
  age?: number;
}
