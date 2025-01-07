import { EntityManager } from '../stubs/entity-manager';

export class ContentMutationSagaCommand<T = any> {
  constructor(
    private readonly dto: T,
    private readonly em: EntityManager,
    private readonly context?: Record<string, any>,
  ) {}

  getFieldValue(field: keyof T): T[keyof T] {
    return this.dto[field];
  }

  getEntityManager(): EntityManager {
    return this.em;
  }

  getContext(): Record<string, any> {
    return this.context;
  }
}

export interface CmsSagaActions {
  commands: SagaCommandConstructor[];
  events: SagaCommandConstructor[];
}

export type SagaCommandConstructor<T = any> = new (
  command: ContentMutationSagaCommand<T>,
) => T;

export interface SagaCommandData<T = any> {
  dto: T;
  em: EntityManager;
}
