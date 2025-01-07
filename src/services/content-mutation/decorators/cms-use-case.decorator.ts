import { CommandBus } from '@nestjs/cqrs';
import {
  CmsUseCaseActions,
  ContentMutationUseCaseCommand,
  UseCaseCommandData,
} from '../interface';
import { EntityManager } from '../../../utils/stubs/entity-manager';

export function CmsUseCase(handlers: CmsUseCaseActions) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ): void {
    descriptor.value = async function (
      this: any,
      commandData: UseCaseCommandData,
    ) {
      const commandBus = this.commandBus as CommandBus;
      const commandHandlers = handlers.commands;
      const context = {};

      const result = await commandData.em.transactional(
        async (tem: EntityManager) => {
          const command = new ContentMutationUseCaseCommand(
            commandData.dto,
            tem,
            context,
          );

          const firstHandler = commandHandlers[0];

          const result = await commandBus.execute(new firstHandler(command));

          context[firstHandler.name] = result;

          for (const [index, handler] of commandHandlers.entries()) {
            if (index === 0) continue;

            const nextCommand = new ContentMutationUseCaseCommand(
              result,
              tem,
              context,
            );

            const nextResult = await commandBus.execute(
              new handler(nextCommand),
            );

            context[handler.name] = nextResult;
          }

          return result;
        },
      );

      // handle events in async manner

      return result;
    };
  };
}
