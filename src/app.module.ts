import { Module } from '@nestjs/common';
import { ContentMutationModule } from './services/content-mutation/content-mutation.module';

@Module({
  imports: [ContentMutationModule],
})
export class AppModule {}
