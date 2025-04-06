import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStaffDto {
  @IsNotEmpty()
  @IsString()
  fullname: string;

  @IsNotEmpty()
  @IsString()
  position: string;

  @IsString()
  short_bio: string;
}

export class UpdateStaffDto {
  @IsString()
  fullname?: string;

  @IsString()
  position?: string;

  @IsString()
  short_bio?: string;
}