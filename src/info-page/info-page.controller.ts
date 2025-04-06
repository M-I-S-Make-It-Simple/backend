import { Controller, Get } from '@nestjs/common';

@Controller('info-page')
export class InfoPageController {
  @Get()
  getInfoPage() {
    return {
      title: 'Інформаційна сторінка',
      content: 'Оголошення, важлива інформація для учнів і батьків',
    };
  }
}
