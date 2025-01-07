import { Module } from '@nestjs/common';
import { ContentMutationController } from './content-mutation.controller';
import { ContentMutationService } from './content-mutation.service';
import { CqrsModule } from '@nestjs/cqrs';
import { SagasModule } from './sagas/sagas.module';
import { CmsMetadataModule } from './cms-metadata/cms-metadata.module';
import { EntityManager } from './stubs/entity-manager';

@Module({
  controllers: [ContentMutationController],
  providers: [
    ContentMutationService,
    {
      provide: 'EntityManager',
      useClass: EntityManager,
    },
  ],
  imports: [CqrsModule, SagasModule, CmsMetadataModule, SagasModule],
})
export class ContentMutationModule {}
