import { Footer, Header } from "../components/common";
import { LayoutProps } from "@/models";

export function Main({ children }: LayoutProps) {
    return (
        <div className="min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
