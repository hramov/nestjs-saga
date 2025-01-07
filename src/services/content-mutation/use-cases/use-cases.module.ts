import { Module } from '@nestjs/common';
import { CreateUser } from './create-user/create-user.use-case';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from '../commands';

const Actions = [CreateUser];
@Module({
  imports: [CqrsModule],
  providers: [...Actions, ...CommandHandlers],
  exports: [...Actions, ...CommandHandlers],
})
export class UseCasesModule {}
