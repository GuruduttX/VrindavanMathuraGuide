import Image from "next/image";
import Link from "next/link";

export default function NormalNavbar() {
    return (
        <nav className="w-full h-full md:h-18">
            <div className=" flex items-center justify-between px-4 sm:px-8 py-4">

                <div className="flex items-center justify-between  space-x-2   w-full   lg:w-[50%] xl:w-[50%] 2xl:w-[44%]">
                    <Link href={"/"}>

                        <Image
                            src="/images/Admin/Experience_my_India.webp"
                            width={140}
                            height={30}
                            alt="logo"
                            className="cursor-pointer"
                        />
                    </Link>


                    <div className="hidden lg:flex items-center lg:space-x-10 xl:space-x-15 font-bold text-gray-700">
                        <div>

                            <Link href={"/"} className="cursor-pointer relative
                                          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                                          after:bg-blue-600 after:transition-all after:duration-400
                                          hover:after:w-full hover:text-blue-600">
                                Home
                            </Link>

                        </div>


                        {/* <CoursesDropdown courses={courses} /> */}
                        <Link href={"/about"} className="cursor-pointer relative
                                          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                                          after:bg-blue-600 after:transition-all after:duration-400
                                          hover:after:w-full md:text-md hover:text-blue-600">About Us
                        </Link>

                        <div>

                            <Link href={"/blog"} className="cursor-pointer relative
                                          after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                                          after:bg-blue-600 after:transition-all after:duration-400
                                          hover:after:w-full hover:text-blue-600">
                                            Blogs
              </Link>


                            {/* <BlogsDropdown blogs={blogs} /> */}

                        </div>

                    </div>
                </div>

                {/* RIGHT: Buttons (Desktop) */}
                <div className="hidden lg:flex items-center gap-4">

                    {/* Student Button */}
                    <Link
                        href={'/student'}
                        className=" relative inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold rounded-full shadow-md transition-all duration-300 ease-in-out hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-300 cursor-pointer bg-orange-400 hover:bg-orange-500"
                    >
                        <span className="text-blue-900">
                            Contact Us
                        </span>
                    </Link>


                    {/* Scholarship Button */}
                    <button
                        // onClick={() => setIsOpen(true)}
                        className=" relative inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold rounded-full shadow-md transition-all duration-300 ease-in-out hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer bg-gradient-to-r from-orange-600 to-orange-500"
                    >
                        <span className="text-white">
                            Enquire Now
                        </span>
                    </button>


                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-gray-700 cursor-pointer transition"
                // onClick={() => setOpen(!open)}
                >
                    {/* {open ? <X size={26} /> : <Menu size={26} />} */}
                </button>
            </div>

            {/* Mobile Menu */}
            {/* {open && (
                <div className="lg:hidden border-t bg-white px-6 py-6 space-y-5 shadow-lg">

                    <div className="flex flex-col gap-4 font-bold text-gray-700">
                        <Link href={"/"} className="hover:text-blue-600 cursor-pointer">Home</Link>
                        <Link href={"/course"} className="hover:text-blue-600 cursor-pointer">Courses</Link>
                        <Link href={"/about"} className="hover:text-blue-600 cursor-pointer">About Us</Link>
                        <Link href={"/blog"} className="hover:text-blue-600 cursor-pointer">Blogs</Link>
                    </div>

                    <div className="flex flex-col gap-3 pt-4">
                        <button className="w-full px-6 py-3 rounded-3xl bg-[#1C336E] text-white font-bold hover:bg-blue-600 transition cursor-pointer">
                            Start Learning
                        </button>
                        <button onClick={() => setIsOpen(true)} className="w-full px-6 py-3 rounded-3xl bg-blue-600 text-white font-bold hover:bg-[#1C336E] transition cursor-pointer">
                            Apply for Scholarship
                        </button>
                    </div>
                </div>
            )} */}
        </nav>
    );
}
