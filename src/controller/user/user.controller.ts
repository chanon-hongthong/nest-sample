import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/service/user.service';

@Controller('api/v1/user')
@ApiTags('API Document (version 1)')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  getAll() {
    return this.userService.findAll();
  }
}
