"use client"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import CardPreview from "@/components/cards/CardPreview";
import CardCode from "@/components/cards/CardCode";
import {useConvertor} from "@/context/SvgConvertorContext";

export function SvgsResults() {

    const {results, deleteItemFromStorage} = useConvertor();

    return (
        <div className="grid gap-10">
            {
                results.map((item, k) => (
                    <Tabs key={'svg-tab-' + k} defaultValue="preview">
                        <TabsList>
                            <TabsTrigger value="preview">Preview</TabsTrigger>
                            <TabsTrigger value="code">Code</TabsTrigger>
                        </TabsList>
                        <TabsContent value="preview">
                            <CardPreview
                                onDelete={deleteItemFromStorage}
                                itemKey={k}
                                svg={item.svg}
                                icon={item.icon}
                                symbol={item.symbol}
                                time={item.time}
                            />
                        </TabsContent>
                        <TabsContent value="code">
                            <CardCode icon={item.icon} symbol={item.codeSample}/>
                        </TabsContent>
                    </Tabs>
                ))
            }
        </div>
    )
}
