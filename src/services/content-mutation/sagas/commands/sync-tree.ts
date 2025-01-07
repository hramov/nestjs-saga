import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ContentMutationSagaCommand } from '../interface';

export class SyncTreeCommand {
  constructor(public command: ContentMutationSagaCommand) {}
}

@CommandHandler(SyncTreeCommand)
export class SyncTreeHandler implements ICommandHandler<SyncTreeCommand> {
  constructor() {}

  async execute(command: SyncTreeCommand): Promise<unknown> {
    console.log('SyncTreeHandler', command.command.getContext());
    return {};
  }
}
