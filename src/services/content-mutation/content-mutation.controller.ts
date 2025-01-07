import { Body, Controller, Post } from '@nestjs/common';
import { CreateObjectDto } from './sagas/create-user/dto/create-user.dto';
import { ContentMutationService } from './content-mutation.service';

@Controller('content-mutation')
export class ContentMutationController {
  constructor(
    private readonly contentMutationService: ContentMutationService,
  ) {}

  @Post('/')
  async create(@Body() body: CreateObjectDto) {
    return this.contentMutationService.create(body);
  }
}
