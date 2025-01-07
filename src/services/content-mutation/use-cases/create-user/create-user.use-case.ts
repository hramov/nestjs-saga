import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { UseCaseCommandData } from '../../interface';
import { SyncTreeCommand } from '../../commands/sync-tree';
import { CreateUserCommand } from '../../commands/create-user';
import { CmsUseCase } from '../../decorators/cms-use-case.decorator';

const CreateUserCmsUseCaseActions = {
  commands: [CreateUserCommand, SyncTreeCommand],
  events: [],
};

@Injectable()
export class CreateUser {
  constructor(private readonly commandBus: CommandBus) {}

  @CmsUseCase(CreateUserCmsUseCaseActions)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async execute<T>(commandData: UseCaseCommandData): Promise<T> {
    return;
  }
}
