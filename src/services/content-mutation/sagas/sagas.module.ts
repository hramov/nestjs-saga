import { Module } from '@nestjs/common';
import { CreateUserSaga } from './create-user.saga';
import { CqrsModule } from '@nestjs/cqrs';
import { SagaCommandHandlers } from './commands';

const Sagas = [CreateUserSaga];
@Module({
  imports: [CqrsModule],
  providers: [...Sagas, ...SagaCommandHandlers],
  exports: [...Sagas, ...SagaCommandHandlers],
})
export class SagasModule {}
