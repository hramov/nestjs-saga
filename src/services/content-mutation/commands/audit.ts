import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ContentMutationUseCaseCommand } from '../interface';

export class AuditCommand {
  constructor(public command: ContentMutationUseCaseCommand<AuditCommand>) {}
}

@CommandHandler(AuditCommand)
export class AuditHandler implements ICommandHandler<AuditCommand> {
  constructor() {}

  async execute({ command }: AuditCommand): Promise<unknown> {
    console.log('AuditHandler', command.getCommandData());
    return command.getCommandData();
  }
}
