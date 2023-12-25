import { Body, Controller, Get, Post } from '@nestjs/common';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { ValidHttpResponse } from '../packages/handler/response/validHttp.response';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Get()
  async getAll() {
    const data = this.usersService.getAll();
    return ValidHttpResponse.toOkResponse(data);
  }
}
