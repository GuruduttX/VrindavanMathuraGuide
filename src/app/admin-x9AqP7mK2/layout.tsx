import DashboardLayout from "@/components/Admin/DashboardLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-4 bg-[#040421]">
            <DashboardLayout>{children}</DashboardLayout>
        </div>
    )
}