import { Controller } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { EventPattern } from '@nestjs/microservices';
import { User } from 'src/user/user.entity';
import { PaymentService } from './payment.service';

@Resolver()
@Controller()
export class PaymentResolver {

    constructor(private readonly paymentService: PaymentService) { }


    @Query(() => User)
    async sayHi() {

    }

    @EventPattern("createCustomer")
    async createStripeAccount(data: User) {
        console.log(data)
        return "ok"
    }

}
