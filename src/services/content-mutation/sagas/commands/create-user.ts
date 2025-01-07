import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ContentMutationSagaCommand } from '../interface';

export class CreateUserCommand {
  constructor(public command: ContentMutationSagaCommand<CreateUserCommand>) {}
}

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor() {}

  async execute(command: CreateUserCommand): Promise<unknown> {
    console.log('CreateUserHandler', command);
    return command.command;
  }
}
