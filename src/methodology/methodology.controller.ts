import { Controller, Get } from '@nestjs/common';

@Controller('methodology')
export class MethodologyController {
  @Get()
  getMethodology() {
    return {
      title: 'Методична робота',
      content: 'Методичні матеріали та підходи до навчання',
    };
  }
}
