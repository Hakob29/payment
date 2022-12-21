import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { StripeModule } from 'nestjs-stripe';
import { PaymentResolver } from './payment/payment.resolver';
import { PaymentService } from './payment/payment.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      sortSchema: true,
      autoSchemaFile: 'schema.gql'
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    StripeModule.forRoot({
      apiKey: process.env.API_KEY,
      apiVersion: "2020-08-27"
    })
  ],
  controllers: [PaymentResolver],
  providers: [PaymentResolver, PaymentService],
})
export class AppModule { }
