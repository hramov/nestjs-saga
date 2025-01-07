import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ContentMutationUseCaseCommand } from '../interface';

export class SyncTreeCommand {
  constructor(public command: ContentMutationUseCaseCommand) {}
}

@CommandHandler(SyncTreeCommand)
export class SyncTreeHandler implements ICommandHandler<SyncTreeCommand> {
  constructor() {}

  async execute({ command }: SyncTreeCommand): Promise<unknown> {
    const finishedSteps = command.getFinishedSteps();

    console.log('SyncTreeHandler', finishedSteps, command.getContext());

    return;
  }
}
