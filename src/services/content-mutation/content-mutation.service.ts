import { Inject, Injectable } from '@nestjs/common';
import { CreateObjectDto } from './use-cases/create-user/dto/create-user.dto';
import { CreateUser } from './use-cases/create-user/create-user.use-case';
import { EntityManager } from 'src/utils/stubs/entity-manager';

@Injectable()
export class ContentMutationService {
  constructor(
    private readonly createUser: CreateUser,
    @Inject('EntityManager') private readonly em: EntityManager,
  ) {}

  async create(createObjectDto: CreateObjectDto) {
    return this.createUser.execute<any>({
      dto: createObjectDto,
      em: this.em.fork(),
    });
  }
}
