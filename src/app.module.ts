import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import { join } from 'path';
import { ProductsModule } from './products/products.module';
import { WholesalerModule } from './wholesaler/wholesaler.module';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true
      }),
      ProductsModule,
      WholesalerModule,
      UsersModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
