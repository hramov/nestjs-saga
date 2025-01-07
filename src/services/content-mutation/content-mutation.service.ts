import { Inject, Injectable } from '@nestjs/common';
import { CreateObjectDto } from './dto/create-user.dto';
import { CreateUserSaga } from './sagas/create-user.saga';
import { EntityManager } from '@mikro-orm/core';

@Injectable()
export class ContentMutationService {
  constructor(
    private readonly createUserSaga: CreateUserSaga,
    @Inject('EntityManager') private readonly em: EntityManager,
  ) {}

  async create(createObjectDto: CreateObjectDto) {
    return this.createUserSaga.execute<any>({
      dto: createObjectDto,
      em: this.em.fork(),
    });
  }
}
