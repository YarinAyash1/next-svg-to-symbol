"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {Icons} from "@/components/icons";
import * as React from "react";


export function FormSymbolConvertor() {

    const formSchema = z.object({
        SVGTextArea: z.string().min(1, 'Please add your svg'),
    })
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            SVGTextArea: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="SVGId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor={'SVGId'}>Symbol Name</FormLabel>
                            <FormControl>
                                <Input  id="SVGId" placeholder="Symbol Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="SVGTextArea"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="SVGTextArea">Convert SVG</Label>
                            <Textarea rows="12" placeholder={'<svg>\n' + '  <!-- here the svg to convert... -->\n' + '</svg>'}
                                      id="SVGTextArea"/>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className={"bg-sky-700 text-white"}>
                    Convert
                    <Icons.convert className="ml-2 h-4 w-4 text-white" />
                </Button>
            </form>
        </Form>
    )
}
