"use client"
import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import BlockCode from "@/components/code-block";

interface CardCodeProps {
    icon: string;
    symbol: string;
}

export default function CardCode({icon, symbol}: CardCodeProps): JSX.Element {
    return (
        <Card className="bg-gray-100">
            <CardContent className="p-3 grid gap-3">
                <BlockCode code={icon} lang={'jsx'}/>
                <BlockCode code={symbol} lang={'jsx'}/>
            </CardContent>
        </Card>
    );
}
