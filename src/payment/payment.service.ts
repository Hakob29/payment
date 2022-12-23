import { Injectable } from '@nestjs/common';
import { InjectStripe } from 'nestjs-stripe';
import Stripe from 'stripe';
import { DataStripeInputs } from './inputs/data-stripe.inputs';

@Injectable()
export class PaymentService {
    constructor(
        @InjectStripe()
        private readonly stripeClent: Stripe
    ) { }

    async createStripeAccount(data: DataStripeInputs) {
        const customer = await this.stripeClent.customers.create(data);
        console.log(customer);
        return customer;
    }

}
