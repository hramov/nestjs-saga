import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ContentMutationUseCaseCommand } from '../interface';

export class CreateUserCommand {
  constructor(
    public command: ContentMutationUseCaseCommand<CreateUserCommand>,
  ) {}
}

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor() {}

  async execute({ command }: CreateUserCommand): Promise<unknown> {
    console.log('CreateUserHandler', command.getCommandData());
    return command.getCommandData();
  }
}
