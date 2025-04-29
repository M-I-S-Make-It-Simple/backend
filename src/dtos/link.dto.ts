import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLinkDto {
  @ApiProperty({ example: 'https://instagram.com/my_school' })
  @IsString()
  url: string;

  @ApiProperty({ example: 'Instagram школи' })
  @IsString()
  label: string;
}

export class UpdateLinkDt {
  @ApiProperty({ example: 'https://instagram.com/my_school' })
    @IsString()
    url: string;

    @ApiProperty({ example: 'Instagram школи' })
    @IsString()
    label: string;
}