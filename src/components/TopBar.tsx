import { FileUser, MailOpen } from "lucide-react";

export function TopBar() {
    return (
        <div className="bg-muted rounded-3xl">
            <div className="flex items-center justify-between p-4 sm:p-6">
                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex text-[2rem] sm:text-[2.5rem] font-mono justify-center items-center leading-none">
                        {"{}"}
                    </div>
                    <div className="flex flex-col items-start">
                    <span className="tn:text-xl text-1xl break-keep font-bold">
                      <span className="block lg:hidden">Ben Loveridge-Rowe</span>
                      <span className="hidden lg:block">Benjamin Loveridge-Rowe</span>
                    </span>
                    <span className="text-sm text-muted-foreground">Software Engineer</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex whitespace-nowrap items-center justify-center gap-2">
                        <FileUser className="w-[1.6rem] h-[1.6rem] md:w-5 md:h-5" strokeWidth={1.9} />
                        <span className="hidden md:inline font-bold text-md">Curriculum Vitae</span>
                    </a>
                    <a href="mailto:ben.loveridgerowe@gmail.com" className="inline-flex whitespace-nowrap items-center justify-center gap-2">
                        <MailOpen className="w-[1.6rem] h-[1.6rem] md:w-5 md:h-5" strokeWidth={1.9} />
                        <span className="hidden md:inline font-bold text-md">Contact Me</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
