import { AuditHandler } from './audit';
import { CreateUserHandler } from './create-user';
import { SyncTreeHandler } from './sync-tree';

export const CommandHandlers = [
  CreateUserHandler,
  SyncTreeHandler,
  AuditHandler,
];
