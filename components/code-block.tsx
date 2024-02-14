"use client"
import {CodeBlock, CopyBlock, dracula, github} from "react-code-blocks";
import {CheckIcon, CopyIcon} from "lucide-react";
import {Toggle} from "@/components/ui/toggle";
import React, {useState} from "react";
import {useCopyToClipboard} from "@/hooks/useCopyToClipboard";

export default function BlockCode({code, lang}) {
    const [copiedText, copyToClipboard] = useCopyToClipboard();
    const [isPressed, setPressed] = useState(false);
    let timeoutRef: NodeJS.Timeout | null = null;

    const onCopy = () => {
        if (timeoutRef) clearTimeout(timeoutRef);

        copyToClipboard(code)
            .then(success => {
                setPressed(true);
                if (success) {
                    timeoutRef = setTimeout(() => {
                        setPressed(false);
                    }, 2000);
                }
            });
    }
    return (
        <div className="code-block relative overflow-x-scroll">
            <Toggle className="absolute bg-white right-0 top-0" pressed={isPressed} onPressedChange={onCopy} aria-label="SVG Copied">
                {isPressed ? (<CheckIcon className="w-5 h-5"/>) : (<CopyIcon className="w-5 h-5" />)}
            </Toggle>
            <CodeBlock
                className={'p-0'}
                text={code}
                language={lang}
                showLineNumbers={false}
                wrapLines
                theme={github}
            />
        </div>
    );
}
