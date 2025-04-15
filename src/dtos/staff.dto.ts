import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStaffDto {
  @ApiProperty({ example: 'Іван Петренко' })
  @IsNotEmpty()
  @IsString()
  fullname: string;

  @ApiProperty({ example: 'Вчитель математики' })
  @IsNotEmpty()
  @IsString()
  position: string;

  @ApiProperty({ example: 'Закінчив КПІ, має 20 років досвіду.' })
  @IsString()
  short_bio: string;

  @ApiProperty({ example: 'https://example.com/photo.jpg' })
  @IsUrl()
  photoUrl?: string;
}

export class UpdateStaffDto {
  @ApiProperty({ example: 'Іван Петренко' })
  @IsString()
  fullname?: string;

  @ApiProperty({ example: 'Вчитель математики' })
  @IsString()
  position?: string;

  @ApiProperty({ example: 'Закінчив КПІ, має 20 років досвіду.' })
  @IsString()
  short_bio?: string;

  @ApiProperty({ example: 'https://example.com/photo.jpg' })
  @IsUrl()
  photoUrl?: string;
}