import { z } from 'zod'

const transferSchema = z.object({
    fromId: z.coerce.number("[fromId] must be number"),
    toId: z.coerce.number("[toId] must be number"),
    amount: z.coerce.number("[amount] must be number").positive("[amount] must be positive")
}, "[transferSchema] expected object")

export {
    transferSchema
}