import * as React from "react";

export interface FooterProps {}

export function Footer(props: FooterProps) {
    return (
        <div className="footer flex items-center justify-center py-5">
            <p className="text-2xl text-white">Copyright ©{new Date().getFullYear()} All rights reserved </p>
        </div>
    );
}
