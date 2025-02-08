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
import {useState} from "react";

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


export function FooterFormWorkers({id, variant}) {

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
            note: "",
        },
    })

    const [isSubmitted, setIsSubmitted] = useState(false);

    async function onSubmit(values) {

        console.log(values);

        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("note", values.note);

        if (values.images && values.images.length > 0) {
            Array.from(values.images).forEach((file) => {
                formData.append("images", file);
            });
        }

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                console.log("E-mail SUCCESSFUL");
            } else {
                console.error("E-mail ERROR");
            }
        } catch (error) {
            console.error("ERROR:", error);
        }

        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            form.reset();
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
                    className="w-full h-full space-y-5"
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
                    <FormField
                        control={form.control}
                        name="images"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className={`${textColorPrimary}`}>
                                    Přiložit fotografii
                                </FormLabel>
                                <FormControl>
                                    <div className="flex flex-col gap-2">
                                        <input
                                            type="file"
                                            multiple
                                            accept="image/*"
                                            className="hidden"
                                            id="file-upload"
                                            onChange={(e) => field.onChange(e.target.files)}
                                        />

                                        <label
                                            htmlFor="file-upload"
                                            className="cursor-pointer bg-button-button-4 text-text-secondary px-4 py-2 rounded-md"
                                        >
                                            Vybrat soubory
                                        </label>

                                        {field.value && field.value.length > 0 && (
                                            <div className="text-sm text-gray-600">
                                                Vybráno: {Array.from(field.value).map(file => file.name).join(", ")}
                                            </div>
                                        )}
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <SubmitButton
                        text="Odeslat zprávu"
                        isSubmitted={isSubmitted}
                        className={`font-bold pl-5 pr-5 mt-auto`}
                        variant={"dark"}
                    />
                </form>
            </Form>
        </div>
    )
}
