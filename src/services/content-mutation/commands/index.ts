import { CreateUserHandler } from './create-user';
import { SyncTreeHandler } from './sync-tree';

export const SagaCommandHandlers = [CreateUserHandler, SyncTreeHandler];
