"use client"
import {createContext, useEffect, useState, ReactNode, useContext} from "react";
import {ResultsItem} from "@/types/ResultsItem";
import {items} from "@/lib/fake-data";

interface SvgConvertorProviderProps {
    children: ReactNode;
}

type TypeSvgConvertorContext = {
    results: ResultsItem[],
    setResults: (results: (prevState: any) => any[]) => void; // remove this any
    deleteItemFromStorage: (index: number) => void;
}

export const SvgConvertorContext = createContext<TypeSvgConvertorContext>({
    setResults(results: ResultsItem[]): void {
    },
    deleteItemFromStorage(index: number): void {
    },
    results: []
} as unknown as TypeSvgConvertorContext);

export function SvgConvertorProvider({children}: SvgConvertorProviderProps) {
    const [results, setResults] = useState<ResultsItem[]>([]);

    useEffect(() => {
        const storedResults = localStorage.getItem('svg-to-symbol-converter');
        console.log(storedResults)
        if (storedResults)
            return setResults(JSON.parse(storedResults));

        localStorage.setItem('svg-to-symbol-converter', JSON.stringify(items));
        setResults(items);
    }, []);


    useEffect(() => {
        if (!results.length) return;
        localStorage.setItem('svg-to-symbol-converter', JSON.stringify(results));
    }, [results])

    function deleteItemFromStorage(index: number) {
        const newResults = [...results];
        newResults.splice(index, 1);
        setResults(newResults);
        localStorage.setItem('svg-to-symbol-converter', JSON.stringify(newResults));
    }

    return (
        <SvgConvertorContext.Provider value={{results, setResults, deleteItemFromStorage}}>
            {children}
        </SvgConvertorContext.Provider>
    );
}

export function useConvertor() {
    const {deleteItemFromStorage, setResults, results} = useContext(SvgConvertorContext);
    return {deleteItemFromStorage, setResults, results}
}
