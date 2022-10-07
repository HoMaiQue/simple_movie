import { LayoutProps } from "models";
import { Footer, Header } from "../components/common";


export function Main({ children }: LayoutProps) {
    return (
        <div className="min-h-screen ">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
