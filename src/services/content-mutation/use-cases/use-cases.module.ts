import { Module } from '@nestjs/common';
import { CreateUser } from './create-user/create-user.use-case';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from '../commands';

const UseCases = [CreateUser];
@Module({
  imports: [CqrsModule],
  providers: [...UseCases, ...CommandHandlers],
  exports: [...UseCases, ...CommandHandlers],
})
export class UseCasesModule {}
