import {Sidebar} from "@/components/sidebar";
import {SvgsResults} from "@/components/svgs-results";

export default function Home() {
    return (
        <div className={'container py-8 flex gap-12'}>
            <div className={'w-[34%]'}>
                <Sidebar/>
            </div>
            <div className={'w-[66%]'}>
                <SvgsResults/>
            </div>
        </div>
    )
}
