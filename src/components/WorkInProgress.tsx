import { Hammer } from "lucide-react";

export function WorkInProgress() {
    return (
        <div className={`text-white cursor-default select-none absolute top-0 left-0 px-4 py-1 text-sm font-bold flex flex-row justify-center items-center gap-1.5 bg-orange-400 rounded-tl-3xl rounded-br-lg`}>
            <Hammer size={17} strokeWidth={2.4}/>
            <span>WIP</span>
        </div>
    );
}
