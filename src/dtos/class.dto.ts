import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateClassDto {
  @IsNotEmpty()
  @IsString()
  class_name: string;

  @IsNotEmpty()
  @IsNumber()
  class_teacher: number;
}

export class UpdateClassDto {
  @IsString()
  class_name?: string;

  @IsNumber()
  class_teacher?: number;
}