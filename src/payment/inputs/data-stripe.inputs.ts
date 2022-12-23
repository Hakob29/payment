import { Field, InputType } from "@nestjs/graphql";
import { User } from "src/user/user.entity";

@InputType()
export class DataStripeInputs {

    @Field()
    name: string

    @Field()
    email: string

    @Field()
    description: string
}