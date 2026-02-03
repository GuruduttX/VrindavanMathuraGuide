import CurrentProductTable from "@/components/Admin/CurrentProductTable";
import CurrentUserTable from "@/components/Admin/CurrentUserTable";
import StatsCard from "@/components/Admin/StatsCard";
import TopBlogTable from "@/components/Admin/TopBlog";
// import HomePageEditor from "@/components/editor/HomePageEditor";
// import BlogTable from "@/components/tables/BlogTable";
// import UserTable from "@/components/tables/UserTable";
// import ProductTable from "@/components/tables/ProductTable";

export default function Dashboard() {
    return (
        <>
            {/* Stats */}
            <div className="grid grid-cols-4 gap-6">
                <StatsCard title="Users" value="12,450" subtitle="Active" />
                <StatsCard title="Posts" value="320" subtitle="Published" />
                <StatsCard title="Products" value="185" subtitle="In Stock" />
                <StatsCard title="Todays Blogs" value="5" subtitle="This Month" />
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-2 gap-6">

                <div>

                    {/* <HomePageEditor /> */}

                </div>

                <TopBlogTable />

            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-2 gap-6">
                <CurrentProductTable />
                <CurrentUserTable />
            </div>
        </>
    );
}
