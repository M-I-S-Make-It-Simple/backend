import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateSubjectDto {
  @IsNotEmpty()
  @IsString()
  subject_name: string;

  @IsNotEmpty()
  @IsNumber()
  teacher_id: number;
}

export class UpdateSubjectDto {
  @IsString()
  subject_name?: string;

  @IsNumber()
  teacher_id?: number;
}