import {Textarea} from "@/components/ui/textarea"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {FormSymbolConvertor} from "@/components/form-symbol-convertor";
import {Switch} from "@/components/ui/switch";

export function Sidebar() {
    return (
        <div className={'sidebar sticky top-20'}>
            <h1 className="text-4xl mb-2">SVG to Symbol Converter</h1>
            <p className={"text-base mb-4"}>This tools will help you to bring <a
                className={"text-sky-500"}
                href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol"
                rel="noopener">&lt;symbol&gt;</a> to your web pages.</p>
            <p>If you are wondering why is better to use symbols instead of SVGs then read <a
                className={"text-sky-500"}
                href="https://css-tricks.com/svg-symbol-good-choice-icons/" rel="noopener">this article from
                CSS-Tricks</a>.</p>
            <hr className={"my-4 opacity-80"} />
            <div className="flex items-center space-x-2 mb-4">
                <Switch id="upload-mode" />
                <Label htmlFor="upload-mode">Switch to upload files</Label>
            </div>
            <FormSymbolConvertor/>
        </div>
    )
}
