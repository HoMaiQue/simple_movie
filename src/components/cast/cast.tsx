import * as React from "react";
import { CastList } from "./cast-list";

export interface CastProps {}

export function Cast(props: CastProps) {
    return (
        <div className="text-center mb-10">
            <h2 className="text-white font-bold text-2xl mb-10">Cast</h2>
            <CastList />
            
        </div>
    );
}
