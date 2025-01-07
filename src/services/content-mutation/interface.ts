import { EntityManager } from '../../utils/stubs/entity-manager';

export class ContentMutationUseCaseCommand<T = any> {
  constructor(
    private readonly dto: T,
    private readonly em: EntityManager,
    private readonly context?: Record<string, any>,
  ) {}

  getCommandData() {
    return this.dto;
  }

  getFieldValue(field: keyof T): T[keyof T] {
    return this.dto[field];
  }

  getEntityManager(): EntityManager {
    return this.em;
  }

  getContext(): Record<string, any> {
    return this.context;
  }

  getFinishedSteps() {
    return this.context ? Object.keys(this.context) : [];
  }
}

export interface CmsUseCaseActions {
  commands: UseCaseCommandConstructor[];
  events: UseCaseCommandConstructor[];
}

export type UseCaseCommandConstructor<T = any> = new (
  command: ContentMutationUseCaseCommand<T>,
) => T;

export interface UseCaseCommandData<T = any> {
  dto: T;
  em: EntityManager;
}
