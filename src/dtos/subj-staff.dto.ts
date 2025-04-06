import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSubjStaffDto {
  @IsNotEmpty()
  @IsNumber()
  subject_id: number;

  @IsNotEmpty()
  @IsNumber()
  staff_id: number;
}