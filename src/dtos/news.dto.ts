import { IsNotEmpty, IsString, IsDateString, IsNumber } from 'class-validator';

export class CreateNewsDto {
  @IsNotEmpty()
  @IsString()
  heading: string;

  @IsDateString()
  publication_date: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  author_id: number;
}

export class UpdateNewsDto {
  @IsString()
  heading?: string;

  @IsDateString()
  publication_date?: string;

  @IsString()
  description?: string;

  @IsNumber()
  author_id?: number;
}