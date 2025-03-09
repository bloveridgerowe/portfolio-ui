import { ReactNode } from "react";

export function Button({ className, children }: { className?: string, children: ReactNode }) {
    return (
        <div
            className={`${className} hover-scale-medium cursor-default select-none font-semi-minus rounded-2xl px-4 py-2 gap-2 inline-flex whitespace-nowrap items-center justify-center`}>
            {children}
        </div>
    )
}
