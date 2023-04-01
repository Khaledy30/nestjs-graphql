import { Module } from '@nestjs/common';
import { WholesalerService } from './wholesaler.service';
import { WholesalerResolver } from './wholesaler.resolver';
import { PrismaService } from "../prisma/prisma.service";

@Module({
  providers: [WholesalerResolver, WholesalerService, PrismaService]
})
export class WholesalerModule {}
