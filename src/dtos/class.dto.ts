import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClassDto {
  @ApiProperty({ example: '5-А' })
  @IsNotEmpty()
  @IsString()
  class_name: string;

  @ApiProperty({ example: 'staff_id' })
  @IsNotEmpty()
  @IsNumber()
  class_teacher: number;
}

export class UpdateClassDto {
  @ApiProperty({ example: '5-Б' })
  @IsString()
  class_name?: string;

  @ApiProperty({ example: 'staff_id' })
  @IsNumber()
  class_teacher?: number;
}