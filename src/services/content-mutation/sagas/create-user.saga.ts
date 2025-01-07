import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/create-user';
import { CmsSaga } from './decorators/cms-saga.decorator';
import { SyncTreeCommand } from './commands/sync-tree';
import { SagaCommandData } from './interface';

const CreateUserSagaActions = {
  commands: [CreateUserCommand, SyncTreeCommand],
  events: [],
};

@Injectable()
export class CreateUserSaga {
  constructor(private readonly commandBus: CommandBus) {}

  @CmsSaga(CreateUserSagaActions)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async execute<T>(commandData: SagaCommandData): Promise<T> {
    return;
  }
}
