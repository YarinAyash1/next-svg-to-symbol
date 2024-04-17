"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {Icons} from "@/components/icons";
import * as React from "react";
import {useState} from "react";
import axios from "axios";
import {buildHtml, getUuid} from "@/lib/utils";
import {useConvertor} from "@/context/SvgConvertorContext";
import ImageUpload from "@/components/custom/image-upload";
import {Switch} from "@/components/ui/switch";


export function FormSymbolConvertor() {
    const [isLoading, setIsLoading] = useState(false);
    const [uploadMode, setUploadMode] = useState(false);
    const {setResults} = useConvertor();
    const formSchema = z.object({
        SVGId: uploadMode ? z.string().optional() : z.string().min(1, 'Please provide a Symbol Name'),
        SVGTextArea: uploadMode ? z.string().optional() : z.string().min(1, 'Please add your SVG'),
    });
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            SVGId: "",
            SVGTextArea: "",
        },
    })


    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        if (event) event.preventDefault();
        setIsLoading(true);
        axios.post(`/api/convert`, {
            svgData: values.SVGTextArea,
            name: values.SVGId
        }, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        }).then(response => {
            const uuid = getUuid();
            const svg = response.data.input;
            const svgId = response.data.svgId || uuid;
            const compiledSamples = buildHtml(response.data.symbol, svgId);

            setResults(prevState => [{
                svg,
                symbol: compiledSamples.symbol,
                icon: compiledSamples.icon,
                codeSample: compiledSamples.symbolExample,
                time: new Date()
            }, ...prevState]);

            form.reset();
            setIsLoading(false);

        })

    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/*<div className="flex items-center space-x-2 mb-4">*/}
                {/*    <Switch id="upload-mode" onCheckedChange={(status) => setUploadMode(status)}/>*/}
                {/*    <Label htmlFor="upload-mode">Switch to upload files</Label>*/}
                {/*</div>*/}
                {
                    !uploadMode ? (

                        <>
                            <FormField
                                control={form.control}
                                name="SVGId"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel htmlFor={'SVGId'}>Symbol Name</FormLabel>
                                        <FormControl>
                                            <Input id="SVGId" {...field} placeholder="Symbol Name" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="SVGTextArea"
                                render={({field}) => (
                                    <FormItem>
                                        <Label htmlFor="SVGTextArea">Convert SVG</Label>
                                        <Textarea rows={12} {...field}
                                                  placeholder={'<svg>\n' + '  <!-- here the svg to convert... -->\n' + '</svg>'}
                                                  id="SVGTextArea"/>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </>

                    ) : (
                        <>
                        {/*<ImageUpload/>*/}
                        </>
                    )
                }

                <Button type="submit" className={"bg-sky-700 text-white"}>
                    Convert
                    <Icons.convert className="ml-2 h-4 w-4 text-white"/>
                </Button>
            </form>
        </Form>
    )
}
