interface LoadingStateProps {
    message?: string;
}

export default function LoadingState({
    message = "در حال بارگذاری...",
}: LoadingStateProps) {
    return (
        <section
            dir="rtl"
            className="flex min-h-screen items-center justify-center overflow-hidden bg-[#F7F8FC] px-5 py-12"
        >
            <div className="relative w-full max-w-[420px]">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#6C63FF]/10 blur-3xl" />

                <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#A69BF0]/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[28px] border border-[#E9EAF2] bg-white px-7 py-10 text-center shadow-[0_12px_40px_rgba(67,65,140,0.08)] sm:px-10">
                    <div className="absolute right-0 left-0 top-0 h-1 bg-gradient-to-l from-[#6C63FF] via-[#8B82FF] to-[#A69BF0]" />

                    <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-[#6C63FF]/10" />

                        <div className="h-12 w-12 animate-spin rounded-full border-[3px] border-[#E9E7FF] border-t-[#6C63FF]" />

                        <div className="absolute h-2.5 w-2.5 rounded-full bg-[#6C63FF]" />
                    </div>

                    <h2 className="text-[16px] font-extrabold text-[#173563] sm:text-[17px]">
                        {message}
                    </h2>

                    <p className="mx-auto mt-2 max-w-[270px] text-[11px] leading-6 text-[#8A91A8]">
                        کمی صبر کنید، مطالب در حال آماده شدن هستند...
                    </p>

                    <div className="mt-5 flex items-center justify-center gap-1.5">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#6C63FF]" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8B82FF] [animation-delay:150ms]" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#A69BF0] [animation-delay:300ms]" />
                    </div>
                </div>
            </div>
        </section>
    );
}