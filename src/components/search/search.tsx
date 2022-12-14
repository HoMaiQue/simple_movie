import * as React from "react";

export interface ISearchProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Search({ handleChange }: ISearchProps) {
    return (
        <div className="flex mb-10 ">
            <div className="flex-1">
                <input
                    type="text"
                    className="w-full p-3 outline-none bg-slate-800 text-white"
                    placeholder="Search movie..."
                    onChange={handleChange}
                />
            </div>
            <button className="p-3 text-white bg-primary">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </button>
        </div>
    );
}
