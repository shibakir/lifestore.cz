"use client"

import { z } from "zod"

export const formSchema = z.object({
    month: z.enum([
        "Leden", "Únor", "Březen", "Duben", "Květen", "Červen",
        "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
    ], { message: "Musíte vybrat platný měsíc." }),
    name: z.string().min(2, { message: "Jméno musí mít alespoň 2 znaky." }),
    surname: z.string().min(2, { message: "Příjmení musí mít alespoň 2 znaky." }),
    birthSurname: z.string().min(2, { message: "Musí mít alespoň 2 znaky." }),
    birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Neplatný formát (DD-MM-YYYY)." }),
    id: z.string().regex(/^\d{6}\/?\d{3,4}$|^\d{2}\.\d{2}\.\d{2}\/\d{3,4}$/, { message: "Neplatné rodné číslo." }),
    insuranceIfSlovak: z.string().optional(),
    accountPrefix: z.string().regex(/^\d{2,}$/, { message: "Předčíslí účtu musí mít alespoň 2 číslice." }),
    accountNumber: z.string().regex(/^\d{2,}$/, { message: "Číslo účtu musí mít alespoň 2 číslice." }),
    bankCode: z.string().regex(/^\d{4}$/, { message: "Kód banky musí mít 4 číslice." }),
    permanentResidence: z.string().min(5, { message: "Trvalé bydliště musí být alespoň 5 znaků dlouhé." }),
    city: z.string().min(2, { message: "Město musí mít alespoň 2 znaky." }),
    postCode: z.string().regex(/^\d{3} ?\d{2}$/, { message: "PSČ musí mít formát 12345 nebo 123 45." }),
    phone: z.string().regex(/^\+?\d{9,15}$/, { message: "Neplatné telefonní číslo." }),
    email: z.string().email({ message: "Neplatný email." }),
    birthplace: z.string().min(2, { message: "Město narození musí mít alespoň 2 znaky." }),
    citizenship: z.string().min(2, { message: "Státní občanství musí mít alespoň 2 znaky." }),
    insuranceName: z.string().min(2, { message: "Název pojišťovny musí mít alespoň 2 znaky." }),
    insuranceCode: z.string().regex(/^\d{3}$/, { message: "Kód pojišťovny musí mít 3 číslice." }),
});
