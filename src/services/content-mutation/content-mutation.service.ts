import { Inject, Injectable } from '@nestjs/common';
import { CreateObjectDto } from './sagas/create-user/dto/create-user.dto';
import { CreateUserSaga } from './sagas/create-user/create-user.saga';
import { EntityManager } from 'src/utils/stubs/entity-manager';

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
