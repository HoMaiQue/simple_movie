import { Skeleton } from "components/common/skeleton";

export function MovieCartSkeleton() {
    return (
        <div className="flex flex-col h-full p-3 text-white rounded-lg select-none bg-slate-800">
            <Skeleton className="w-full h-[250px]  rounded-lg mb-5" />
            <div className="flex flex-col flex-1">
                <h3 className="mb-3 text-xl font-bold">
                    <Skeleton className="w-full h-[20px]  rounded-lg mb-5" />
                </h3>
                <div className="flex items-center justify-between mb-5 text-sm ">
                    <Skeleton className="w-[20px] h-[10px]  rounded-lg mb-5" />

                    <div className="flex items-center gap-x-2">
                        <Skeleton className="w-[20px] h-[10px]  mb-5" />

                        <Skeleton className="w-[20px] h-[10px]  mb-5" />
                    </div>
                </div>

                <Skeleton className="w-full px-6 py-5 mt-auto capitalize rounded-lg" />
            </div>
        </div>
    );
}
