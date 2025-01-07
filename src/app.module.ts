import { Module } from '@nestjs/common';
import { ContentMutationModule } from './services/content-mutation/content-mutation.module';
import { ContentQueryModule } from './services/content-query/content-query.module';
import { DomainManagerModule } from './services/domain-manager/domain-manager.module';

@Module({
  imports: [ContentMutationModule, ContentQueryModule, DomainManagerModule],
})
export class AppModule {}
