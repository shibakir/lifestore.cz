"use client"

import { z } from "zod"

export const formSchema = z.object({
    name: z.string().min(1, "Toto pole je povinné"),
    phone: z.string().min(1, "Toto pole je povinné"),
    email: z.string().min(1, "Toto pole je povinné"),
    note: z.string().optional(),
})
