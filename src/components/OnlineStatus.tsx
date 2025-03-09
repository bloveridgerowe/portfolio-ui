import { CircleCheck, CircleEllipsis, CircleX } from "lucide-react";

export interface StatusLabelProps {
    isLive?: boolean;
    isLoading: boolean;
}

export function OnlineStatus({ isLive, isLoading }: StatusLabelProps) {
    const backgroundColour = isLoading ? "bg-blue-500" : isLive ? "bg-green-500" : "bg-red-500";
    const Icon = isLoading ? CircleEllipsis : isLive ? CircleCheck : CircleX;
    const statusText = isLoading ? "CHECKING" : isLive ? "ONLINE" : "OFFLINE";

    return (
        <div className={`cursor-default select-none absolute top-0 right-0 px-4 py-1 text-sm font-bold text-white flex flex-row justify-center items-center gap-1.5 ${backgroundColour} rounded-tr-3xl rounded-bl-lg`}>
            <span>{statusText}</span>
            <Icon size={16} strokeWidth={2.5}/>
        </div>
    );
}
