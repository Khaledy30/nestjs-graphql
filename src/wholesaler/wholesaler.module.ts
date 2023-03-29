import { Module } from '@nestjs/common';
import { WholesalerService } from './wholesaler.service';
import { WholesalerResolver } from './wholesaler.resolver';

@Module({
  providers: [WholesalerResolver, WholesalerService]
})
export class WholesalerModule {}
