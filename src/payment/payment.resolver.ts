import { Controller } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { EventPattern } from '@nestjs/microservices';
import { User } from 'src/user/user.entity';
import { DataStripeInputs } from './inputs/data-stripe.inputs';
import { PaymentService } from './payment.service';

@Resolver()
@Controller()
export class PaymentResolver {

    constructor(private readonly paymentService: PaymentService) { }


    @Query(() => User)
    async sayHi() {

    }

    @EventPattern("createCustomer")
    async createStripeAccount(data: DataStripeInputs) {
        return await this.paymentService.createStripeAccount(data);
    }

}
