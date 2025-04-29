import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSubjectDto {
  @ApiProperty({ example: 'Англійська мова' })
  @IsNotEmpty()
  @IsString()
  subject_name: string;

  @ApiProperty({ example: 'staff_id' })
  @IsNotEmpty()
  @IsNumber()
  teacher_id: number;
}

export class UpdateSubjectDto {
  @ApiProperty({ example: 'Німецька мова' })
  @IsString()
  subject_name?: string;

  @ApiProperty({ example: 'staff_id' })
  @IsNumber()
  teacher_id?: number;
}