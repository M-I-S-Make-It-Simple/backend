import { IsNotEmpty, IsString, IsDateString, IsNumber, IsUrl, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNewsDto {
  @ApiProperty({ example: 'Заголовок новини' })
  @IsNotEmpty()
  @IsString()
  heading: string;

  @ApiProperty({ example: '01-01-2001' })
  @IsDateString()
  publication_date: string;

  @ApiProperty({ example: 'Опис новини' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: 'https://example.com/photo.jpg' })
  @IsArray()
  @IsUrl()
  photoUrl?: string[];
}

export class UpdateNewsDto {
  @ApiProperty({ example: 'Заголовок новини' })
  @IsString()
  heading?: string;

  @ApiProperty({ example: '01-01-2001' })
  @IsDateString()
  publication_date?: string;

  @ApiProperty({ example: 'Опис новини' })
  @IsString()
  description?: string;

  @ApiProperty({ example: 'https://example.com/photo.jpg' })
  @IsArray()
  @IsUrl()
  photoUrl?: string[];
}