import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentResolver } from './payment.resolver';


@Module({
    imports: [],
    providers: [PaymentService, PaymentResolver],
    controllers: []
})
export class PaymentModule { }