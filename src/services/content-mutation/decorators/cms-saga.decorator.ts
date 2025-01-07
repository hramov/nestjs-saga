import { CommandBus } from '@nestjs/cqrs';
import {
  CmsSagaActions,
  ContentMutationSagaCommand,
  SagaCommandData,
} from '../interface';
import { EntityManager } from '../../../utils/stubs/entity-manager';

export function CmsSaga(handlers: CmsSagaActions) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ): void {
    descriptor.value = async function (
      this: any,
      commandData: SagaCommandData,
    ) {
      const commandBus = this.commandBus as CommandBus;
      const commandHandlers = handlers.commands;
      const context = {};

      const result = await commandData.em.transactional(
        async (tem: EntityManager) => {
          const command = new ContentMutationSagaCommand(
            commandData.dto,
            tem,
            context,
          );

          const firstHandler = commandHandlers[0];

          const result = await commandBus.execute(new firstHandler(command));

          context[firstHandler.name] = result;

          commandHandlers.shift();

          for (const handler of commandHandlers) {
            const nextCommand = new ContentMutationSagaCommand(
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
