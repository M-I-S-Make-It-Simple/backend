import { Controller, Get } from '@nestjs/common';

@Controller('staff')
export class StaffController {
  @Get()
  getStaff() {
    return {
      title: 'Педагогічний колектив',
      content: 'Інформація про вчителів та адміністрацію ліцею',
    };
  }
}
