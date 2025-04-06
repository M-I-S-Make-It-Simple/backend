import { Controller, Get } from '@nestjs/common';

@Controller('transparency')
export class TransparencyController {
  @Get()
  getTransparency() {
    return {
      title: 'Прозорість управління',
      content: 'Документи та звіти щодо прозорого управління закладом',
    };
  }
}
