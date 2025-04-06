import { Controller, Get } from '@nestjs/common';

@Controller('education')
export class EducationController {
  @Get()
  getEducation() {
    return {
      title: 'Освітній процес',
      content: 'Розклад, навчальні програми та інша інформація',
    };
  }
}
