"use client"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {getItemDate} from "@/lib/utils";

interface CardPreviewProps {
    time: string;
    svg: string;
    symbol: string;
    icon: string;
}

export default function CardPreview({time, symbol, svg, icon}: CardPreviewProps) {

    return (
        <Card className="w-full">
            <CardHeader
                className={"border-b bg-gray-200 flex flex-row px-4 py-2 items-center justify-between"}>
                <CardTitle className={"text-sm"}>{getItemDate(time)}</CardTitle>
                <Button variant={'destructive'} className={"text-xs h-7"} size={'sm'}>Delete</Button>
            </CardHeader>
            <CardContent className="py-8">
                <div className="flex justify-around">
                    <div className="input">
                        <span className="font-bold mb-2 block text-xl">SVG (Your Input)</span>
                        <div className="icon bg-gray-300 w-[100px] h-[100px] p-3 m-auto"
                             dangerouslySetInnerHTML={{__html: svg}}></div>
                    </div>
                    <div className="output">
                        <span className="font-bold mb-2 block text-xl">Symbol (converted to)</span>
                        <div className="hidden" dangerouslySetInnerHTML={{__html: symbol}}></div>
                        <div className="icon bg-gray-300 w-[100px] h-[100px] p-3 m-auto"
                             dangerouslySetInnerHTML={{__html: icon}}></div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
