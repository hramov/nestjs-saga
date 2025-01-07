import { Module } from '@nestjs/common';
import { ContentMutationController } from './content-mutation.controller';
import { ContentMutationService } from './content-mutation.service';
import { CqrsModule } from '@nestjs/cqrs';
import { CmsMetadataModule } from '../../utils/cms-metadata/cms-metadata.module';
import { EntityManager } from '../../utils/stubs/entity-manager';
import { UseCasesModule } from './use-cases/use-cases.module';

@Module({
  controllers: [ContentMutationController],
  providers: [
    ContentMutationService,
    {
      provide: 'EntityManager',
      useClass: EntityManager,
    },
  ],
  imports: [CqrsModule, CmsMetadataModule, UseCasesModule],
})
export class ContentMutationModule {}
