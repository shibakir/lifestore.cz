"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {formSchema} from "@/schemas/schema"

import SubmitButton from "@/common/Buttons/SubmitButton";
import Title from "@/common/Title";

export function FooterForm() {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    function onSubmit(values) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <Title
                className="mb-5 text-text-primary block lg:hidden"
                title={"Začněte plánovat svou akci s námi!"}
            />
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full h-full space-y-5 lg:space-y-10"
            >

                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="text-text-primary">Jméno a přijmení</FormLabel>
                            <FormControl>
                                <Input {...field} className="text-text-primary bg-button-button-3 border-0"/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="text-text-primary">E-mail</FormLabel>
                            <FormControl>
                                <Input {...field} className="text-text-primary bg-button-button-3 border-0"/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="text-text-primary">Telefonní číslo</FormLabel>
                            <FormControl>
                                <Input {...field} className="text-text-primary bg-button-button-3 border-0"/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="note"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className="text-text-primary">Zpráva</FormLabel>
                            <FormControl>
                            <textarea {...field}
                                      className="text-text-primary bg-button-button-3 border-0 w-full p-2 resize-none rounded-md"
                                      style={{minHeight: "120px"}}
                            />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <SubmitButton
                    text="Odeslat zprávu"
                    className="bg-button-button-2 hover:bg-button-button-3 font-bold text-text-secondary pl-5 pr-5 mt-auto"
                />
            </form>
        </Form>
    )
}
