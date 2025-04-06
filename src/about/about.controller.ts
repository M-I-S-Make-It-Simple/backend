import { Controller, Get } from '@nestjs/common';

@Controller('about')
export class AboutController {
  @Get()
  getAbout() {
    return {
      title: 'Про ліцей',
      content: 'Інформація про історію, місію та цінності ліцею',
    };
  }
}
