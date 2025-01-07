import { Module } from '@nestjs/common';
import { CmsMetadataService } from './cms-metadata.service';

@Module({
  providers: [CmsMetadataService],
  exports: [CmsMetadataService],
})
export class CmsMetadataModule {}
