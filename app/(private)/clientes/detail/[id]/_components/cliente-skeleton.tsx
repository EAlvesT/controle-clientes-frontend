export function ClienteSkeleton() {
    return (
        <>
            <div className="w-full pl-8 py-2 bg-gray-300 rounded-lg">
                <div className="w-3/5 h-8 bg-gray-700/80 rounded-lg skeleton-shimmer" />
            </div>

            <div className="w-full p-4 mt-4 h-[calc(100vh-120px)] bg-gray-300 rounded-lg flex items-start justify-start flex-col gap-6">
                <div className="w-3/5 h-10 bg-gray-700/80 rounded-lg skeleton-shimmer" />
                <div className="w-4/5 h-10 bg-gray-700/80 rounded-lg skeleton-shimmer" />
                <div className="w-full flex items-center justify-between gap-4">
                    <div className="flex-1 h-10 bg-gray-700/80 rounded-lg skeleton-shimmer" />
                    <div className="flex-1 h-10 bg-gray-700/80 rounded-lg skeleton-shimmer" />
                </div>
                <div className="w-4/5 h-10 bg-gray-700/80 rounded-lg skeleton-shimmer" />
                <div className="w-4/5 h-10 bg-gray-700/80 rounded-lg skeleton-shimmer" />
                <div className="w-4/5 h-10 bg-gray-700/80 rounded-lg skeleton-shimmer" />
                <div className="w-4/5 h-10 bg-gray-700/80 rounded-lg skeleton-shimmer" />
            </div>
        </>
    )
};