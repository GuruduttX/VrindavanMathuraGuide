import DashboardLayout from "@/components/Admin/DashboardLayout";
import {Toaster} from "react-hot-toast";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-4 bg-[#040421]">
            <DashboardLayout>{children}</DashboardLayout>
            <Toaster/>
        </div>
    )
}