import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateClassSubjDto {
  @IsNotEmpty()
  @IsNumber()
  class_id: number;

  @IsNotEmpty()
  @IsNumber()
  subj_id: number;
}