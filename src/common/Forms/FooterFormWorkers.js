"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import SubmitButton from "@/common/Buttons/SubmitButton";

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
import Title from "@/common/Title";

const variants = {
    light: {
        mainColor: "bg-button-button-4",
        textColorPrimary: "text-text-secondary",
        buttonColor: "bg-button-button-1",
        buttonTextColor: "text-text-primary",
    },
    dark: {
        mainColor: "bg-button-button-3",
        textColorPrimary: "text-text-primary",
        buttonColor: "bg-button-button-2",
        buttonTextColor: "text-text-secondary",
    },
};


export function FooterFormWorkers({variant}) {

    const {
        mainColor, // fields
        textColorPrimary, // labels
        buttonColor, // submit button
        buttonTextColor, // submit button text
    } = variants[variant] || variants.dark;

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
                className={`${textColorPrimary} lg:hidden mb-3 text-xl font-normal leading-tight`}
                title={"Kontaktní formulář"}
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
                            <FormLabel
                                className={`${textColorPrimary}`}
                            >Jméno a přijmení
                            </FormLabel>
                            <FormControl>
                                <Input {...field} className={`${mainColor} border-0`}/>
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
                            <FormLabel
                                className={`${textColorPrimary}`}
                            >
                                E-mail
                            </FormLabel>
                            <FormControl>
                                <Input {...field} className={`${mainColor} border-0`}/>
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
                            <FormLabel
                                className={`${textColorPrimary}`}
                            >
                                Telefonní číslo
                            </FormLabel>
                            <FormControl>
                                <Input {...field} className={`${mainColor} border-0`}/>
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
                            <FormLabel
                                className={`${textColorPrimary}`}
                            >
                                Zpráva
                            </FormLabel>
                            <FormControl>
                            <textarea {...field}
                                      className={`${mainColor} border-0 w-full p-2 resize-none rounded-md`}
                                      style={{minHeight: "120px"}}
                            />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <SubmitButton
                    text="Odeslat zprávu"
                    className={`font-bold pl-5 pr-5 mt-auto`}
                    variant={"dark"}
                />
            </form>
        </Form>
    )
}
