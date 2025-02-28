"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import SignatureCanvas from "react-signature-canvas";

import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {useEffect, useRef, useState} from "react";

import {formSchema} from "@/schemas/documentsSchema";
import {ReCAPTCHA} from "react-google-recaptcha";
import {recaptcha} from "@/constants/constants";
import {generatePdf, showPdf} from "@/components/docs/PdfComponent";

export function DocumentsForm() {

    const defaultValues = {
        name: "",
        surname: "",
        birthSurname: "",
        birthDate: "",
        id: "",
        insuranceIfSlovak: "",
        accountPrefix: "",
        accountNumber: "",
        bankCode: "",
        permanentResidence: "",
        city: "",
        postCode: "",
        phone: "",
        email: "",
        birthplace: "",
        citizenship: "",
        insuranceName: "",
        insuranceCode: "",
    };

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    function onSubmit(values) {
        if (isBlocked) {
            alert(`Formulář můžete odeslat za ${timeLeft} sekund.`);
            return;
        }
        if (sigCanvas.current.isEmpty()) {
            alert("Přidejte podpis před odesláním!");
            return;
        }

        console.log(values);
        generatePdf(values, sigCanvas).then(r => {});

        // generate pdf
        if (optionalFormIsChecked) {
            // double document
        } else {
            // single document
        }

        // TODO api call: send data to Google Disk folders using Make
        // TODO api call: send data to Excel table Google Disk using Make

        /* blocking time */
        localStorage.setItem("lastSubmitTime", Date.now().toString());
        setIsBlocked(true);
        setTimeLeft(600);
        updateProgress(600000);

        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    setIsBlocked(false);
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }

    const sigCanvas = useRef(null)
    function clear() {
        sigCanvas.current.clear()
    }

    const [optionalFormIsChecked, setOptionalFormIsChecked] = useState(false);

    const [isBlocked, setIsBlocked] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const lastSubmitTime = localStorage.getItem("lastSubmitTime");
        if (lastSubmitTime) {
            const elapsedTime = Date.now() - parseInt(lastSubmitTime, 10);
            const remainingTime = 600000 - elapsedTime;
            if (remainingTime > 0) {
                setIsBlocked(true);
                setTimeLeft(Math.ceil(remainingTime / 1000));
                updateProgress(remainingTime);
                const interval = setInterval(() => {
                    setTimeLeft(prev => {
                        if (prev <= 1) {
                            setIsBlocked(false);
                            clearInterval(interval);
                            return 0;
                        }
                        return prev - 1;
                    });
                }, 1000);
            }
        }
    }, []);

    function updateProgress(remainingTime) {
        const initialProgress = (remainingTime / 600000) * 100;
        setProgress(initialProgress);

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - (100 / 600);
            });
        }, 1000);
    }

    return (
        <div className="!mt-10">

            <Button
                className="bg-button-button-3 hover:bg-button-button-1 text-text-primary hover:text-text-primary"
                type="button"
                onClick={generatePdf}
            >
                Generate
            </Button>

            <div className="items-top flex space-x-2 !mt-4 !mb-10">
                <Checkbox
                    id="terms1"
                    checked={optionalFormIsChecked}
                    onCheckedChange={(checked) => {setOptionalFormIsChecked(checked)}}
                />
                <div className="grid gap-1.5 leading-none">
                    <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Chci podepsat růžové prohlášení
                    </label>
                    <p className="text-sm leading-tight text-muted-foreground">
                        Spolu se smlouvou současně podepisujete i růžové prohlášení <span className="m-0 p-0 hidden sm:contents"><br/></span>
                        (<span className="font-semibold">Prohlášení poplatníka daně z příjmu FO ze závislé činnosti</span>)
                    </p>
                </div>
            </div>
            <ReCAPTCHA sitekey={recaptcha}>
             <Form {...form}>
                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                     <div>
                         <FormField
                             control={form.control}
                             name="month"
                             render={({ field }) => (
                                 <FormItem>
                                     <FormLabel key="month">Vyberte měsíc</FormLabel>
                                     <FormControl>
                                         <Select onValueChange={field.onChange} defaultValue={field.value}>
                                             <SelectTrigger className="bg-button-button-4 font-semibold">
                                                 <SelectValue/>
                                             </SelectTrigger>
                                             <SelectContent onCloseAutoFocus={(e) => e.preventDefault()}>
                                                 {[
                                                     "Leden", "Únor", "Březen", "Duben", "Květen", "Červen",
                                                     "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
                                                 ].map((month) => (
                                                     <SelectItem key={month} value={month}>
                                                         {month}
                                                     </SelectItem>
                                                 ))}
                                             </SelectContent>
                                         </Select>
                                     </FormControl>
                                     <FormMessage />
                                 </FormItem>
                             )}
                         />
                     </div>
                     <div className="flex flex-row space-x-5">
                         <div className="w-1/2">
                             <FormField
                                 control={form.control}
                                 name="name"
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel key="name">Jmeno</FormLabel>
                                         <FormControl>
                                             <Input className="bg-button-button-4 font-semibold"
                                                    placeholder="" {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                         <div className="w-1/2">
                             <FormField
                                 control={form.control}
                                 name="surname"
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel>Příjmení</FormLabel>
                                         <FormControl>
                                             <Input className="bg-button-button-4 font-semibold"
                                                    placeholder="" {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                     </div>
                     <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-5 sm:space-y-0">
                         <div className="sm:w-1/2">
                             <FormField
                                 control={form.control}
                                 name="birthDate"
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel>Datum narození</FormLabel>
                                         <FormControl>
                                             <Input className="bg-button-button-4 font-semibold" placeholder=""
                                                    type="date" {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                         <div className="sm:w-1/2">
                             <FormField
                                 control={form.control}
                                 name="birthSurname"
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel>Jméno za svobodna</FormLabel>
                                         <FormControl>
                                             <Input className="bg-button-button-4 font-semibold"
                                                    placeholder="" {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                     </div>
                     <div>
                         <FormField
                             control={form.control}
                             name="id"
                             render={({field}) => (
                                 <FormItem>
                                     <FormLabel>Rodné číslo</FormLabel>
                                     <FormControl>
                                         <Input className="bg-button-button-4 font-semibold"
                                                placeholder="" {...field} />
                                     </FormControl>
                                     <FormMessage/>
                                 </FormItem>
                             )}
                         />
                     </div>
                     <div>
                         <FormField
                             control={form.control}
                             name="insuranceIfSlovak"
                             render={({field}) => (
                                 <FormItem>
                                     <FormLabel>Číslo pojištěnce v případě slovenského občanství (Přidělené
                                         EČP)</FormLabel>
                                     <FormControl>
                                         <Input className="bg-button-button-4 font-semibold"
                                                placeholder="" {...field} />
                                     </FormControl>
                                     <FormMessage/>
                                 </FormItem>
                             )}
                         />
                     </div>
                     <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-5 lg:space-y-0">
                         <div>
                             <FormField
                                 control={form.control}
                                 name="accountPrefix"
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel>Předčíslí účtu</FormLabel>
                                         <FormControl>
                                             <Input className="bg-button-button-4 font-semibold"
                                                    placeholder="" {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                         <div>
                             <FormField
                                 control={form.control}
                                 name="accountNumber"
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel>Základ účtu</FormLabel>
                                         <FormControl>
                                             <Input className="bg-button-button-4 font-semibold"
                                                    placeholder="" {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                         <div>
                             <FormField
                                 control={form.control}
                                 name="bankCode"
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel>Kód banky</FormLabel>
                                         <FormControl>
                                             <Input className="bg-button-button-4 font-semibold"
                                                    placeholder="" {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                     </div>
                     <div>
                         <FormField
                             control={form.control}
                             name="permanentResidence"
                             render={({field}) => (
                                 <FormItem>
                                     <FormLabel>Trvalé bydliště</FormLabel>
                                     <FormControl>
                                         <Input className="bg-button-button-4 font-semibold"
                                                placeholder="" {...field} />
                                     </FormControl>
                                     <FormMessage/>
                                 </FormItem>
                             )}
                         />
                     </div>
                     <div className="flex flex-row space-x-5">
                         <div className="w-1/2">
                             <FormField
                                 control={form.control}
                                 name="city"
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel>Město</FormLabel>
                                         <FormControl>
                                             <Input className="bg-button-button-4 font-semibold"
                                                    placeholder="" {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                         <div className="w-1/2">
                             <FormField
                                 control={form.control}
                                 name="postCode"
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel>PSČ</FormLabel>
                                         <FormControl>
                                             <Input className="bg-button-button-4 font-semibold"
                                                    placeholder="" {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                     </div>
                     <div className="flex flex-row space-x-5">
                         <div className="w-1/2">
                             <FormField
                                 control={form.control}
                                 name="phone"
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel>Telefon</FormLabel>
                                         <FormControl>
                                             <Input className="bg-button-button-4 font-semibold"
                                                    placeholder="" {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                         <div className="w-1/2">
                             <FormField
                                 control={form.control}
                                 name="email"
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel>Email</FormLabel>
                                         <FormControl>
                                             <Input className="bg-button-button-4 font-semibold"
                                                    placeholder="" {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                     </div>
                     <div className="flex flex-row space-x-5">
                         <div className="w-1/2">
                             <FormField
                                 control={form.control}
                                 name="birthplace"
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel>Město narození</FormLabel>
                                         <FormControl>
                                             <Input className="bg-button-button-4 font-semibold"
                                                    placeholder="" {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                         <div className="w-1/2">
                             <FormField
                                 control={form.control}
                                 name="citizenship"
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel>Státní občanství</FormLabel>
                                         <FormControl>
                                             <Input className="bg-button-button-4 font-semibold"
                                                    placeholder="" {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                     </div>
                     <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-5 sm:space-y-0">
                         <div className="sm:w-1/2">
                             <FormField
                                 control={form.control}
                                 name="insuranceName"
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel>Název zdravotní pojišťovny</FormLabel>
                                         <FormControl>
                                             <Input className="bg-button-button-4 font-semibold"
                                                    placeholder="" {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                         <div className="sm:w-1/2">
                             <FormField
                                 control={form.control}
                                 name="insuranceCode"
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel>Kód zdravotní pojišťovny</FormLabel>
                                         <FormControl>
                                             <Input className="bg-button-button-4 font-semibold"
                                                    placeholder="" {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                     </div>
                     <div className="flex flex-col justify-between">
                         <FormLabel className="pb-4">Podpis</FormLabel>
                         <div className="flex flex-col space-y-2">
                             <SignatureCanvas
                                 ref={sigCanvas}
                                 canvasProps={{
                                     className: "sm:w-[350px] h-[150px] bg-button-button-4 rounded-[1vh]"
                                 }}
                             />
                             <div>
                                 <Button
                                     className="bg-button-button-4 hover:bg-button-button-3 text-text-secondary hover:text-text-primary"
                                     type="button" onClick={clear}>Smazat podpis</Button>
                             </div>
                         </div>
                     </div>

                     <div className="pt-[40px]">
                         {isBlocked && (
                             <div className="mt-5 mb-5">
                                 <p className="text-sm text-gray-500">
                                     Před opětovným odesláním počkejte {timeLeft} sekund.
                                 </p>
                                 <Progress value={progress} className="bg-button-button-2 mt-2"/>
                             </div>
                         )}
                         <Button
                             disabled={isBlocked}
                             className="bg-button-button-3 hover:bg-button-button-1 text-text-primary hover:text-text-primary"
                             type="submit">Odeslat dokument</Button>
                     </div>
                 </form>
             </Form>
            </ReCAPTCHA>
        </div>
    )
}
