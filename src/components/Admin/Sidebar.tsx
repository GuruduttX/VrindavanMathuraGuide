import {
    LayoutDashboard,
    FileText,
    Users,
    Settings,
    Package,
} from "lucide-react";
import Link from "next/link";

const menu = [
    { name: "Dashboard", icon: LayoutDashboard, slug: "/admin-x9AqP7mK2" },
    { name: "Home Page Editor", icon: FileText, slug: "/admin-x9AqP7mK2/homepageEditor" },
    { name: "Blog Editor", icon: FileText, slug: "/admin-x9AqP7mK2/blogs" },
    { name: "Product Editor", icon: Package, slug: "/admin-x9AqP7mK2/products" },
    { name: "User Management", icon: Users, slug: "/admin-x9AqP7mK2" },
    { name: "Settings Panel", icon: Settings, slug: "/admin-x9AqP7mK2" },
];

export default function Sidebar() {
    return (
        <aside className="w-64 h-[97vh] bg-[#0f172a] border-r border-white/10 p-4 rounded-3xl shadow-sm shadow-indigo-300 hover:shadow-xl hover:shadow-indigo-400 cursor-pointer transition fixed">
           <div className="flex gap-1 bg-white rounded-full mb-4">
            <img src="/images/Admin/Experience_my_India.webp" className="h-[50px]"/>
            
           </div>
            <nav className="space-y-4">
                {menu.map((item) => (
                    <Link href={item.slug}  key={item.name} >
                        <div
                           
                            className="flex items-center gap-3 px-4 rounded-lg hover:bg-white/10 cursor-pointer text-white text-md py-3"
                        >
                            <item.icon size={18} />
                            <span>{item.name}</span>
                        </div>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
