export interface StatusLabelProps {
    isLive?: boolean;
    isLoading: boolean;
}

export function StatusLabel({ isLive, isLoading }: StatusLabelProps) {
    const statusColor = isLoading ? "bg-blue-500" : isLive ? "bg-green-500" : "bg-red-500";

    const dotColor = isLoading
        ? "bg-blue-300 shadow-blue-900"
        : isLive
            ? "bg-green-300 shadow-green-900"
            : "bg-red-300 shadow-red-900";

    const statusText = isLoading ? "CHECKING" : isLive ? "ONLINE" : "OFFLINE";

    return (
        <div
            className={`cursor-default select-none absolute top-0 right-0 pl-3 pr-5 py-1 text-sm font-bold text-white flex items-center gap-2 ${statusColor} rounded-tr-3xl rounded-bl-lg`}>
            <div className={`w-2.5 h-2.5 rounded-full ${dotColor} shadow-lg`}/>
            {statusText}
        </div>
    );
}
