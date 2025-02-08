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
import {Button} from "@headlessui/react";
import Title from "@/common/Title";
import {useState} from "react";

const variants = {
    light: {
        mainColor: "bg-button-button-4",
        textColorPrimary: "text-text-secondary",
        buttonTextColor: "text-text-primary",
        submitButtonStyle: "dark",
    },
    "gallery-light": {
        mainColor: "bg-button-button-4",
        textColorPrimary: "text-text-secondary",
        buttonTextColor: "text-text-primary",
        submitButtonStyle: "dark",
    },
    dark: {
        mainColor: "bg-button-button-3",
        textColorPrimary: "text-text-primary",
        buttonTextColor: "text-text-secondary",
        submitButtonStyle: "light",
    },
};

export function FooterFormClients({id, variant}) {

    const {
        mainColor, // fields
        textColorPrimary, // labels
        buttonTextColor, // submit button text
        submitButtonStyle, // submit button color
    } = variants[variant] || variants.dark;

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            note: "",
        },
    })

    const [isSubmitted, setIsSubmitted] = useState(false);

    function onSubmit(values) {
        console.log(values);

        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
            form.reset()
        }, 1000);
    }

    return (
        <div className="w-full h-full grow">
            <Form {...form}>
                <Title
                    className={`${textColorPrimary} lg:hidden mt-5 mb-3 text-xl font-normal leading-tight`}
                    title={"Kontaktní formulář"}
                />
                <form
                    id={id}
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full h-full grow space-y-5"
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
                                      style={{minHeight: "220px"}}
                            />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <SubmitButton
                        text="Odeslat zprávu"
                        isSubmitted={isSubmitted}
                        className="font-bold pl-5 pr-5 mt-auto"
                        variant={submitButtonStyle}
                    />

                </form>
            </Form>
        </div>
    );
}
