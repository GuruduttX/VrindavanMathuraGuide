export default function ProductTable() {
  const blogs = [
    {
      title: "A Way to Grow Your Online Business",
      domain: "Digital Marketing",
      author: "Adarsh Dubey",
    },
    {
      title: "Top Places to Visit in Vrindavan",
      domain: "Travel",
      author: "Vishal Sharma",
    },
    {
      title: "A Way to Grow Your Online Business",
      domain: "Digital Marketing",
      author: "Adarsh Dubey",
    },
    {
      title: "Top Places to Visit in Vrindavan",
      domain: "Travel",
      author: "Vishal Sharma",
    },
    {
      title: "A Way to Grow Your Online Business",
      domain: "Digital Marketing",
      author: "Adarsh Dubey",
    },
    {
      title: "Top Places to Visit in Vrindavan",
      domain: "Travel",
      author: "Vishal Sharma",
    },
    {
      title: "A Way to Grow Your Online Business",
      domain: "Digital Marketing",
      author: "Adarsh Dubey",
    },
    {
      title: "Top Places to Visit in Vrindavan",
      domain: "Travel",
      author: "Vishal Sharma",
    },
    {
      title: "A Way to Grow Your Online Business",
      domain: "Digital Marketing",
      author: "Adarsh Dubey",
    },
    {
      title: "Top Places to Visit in Vrindavan",
      domain: "Travel",
      author: "Vishal Sharma",
    },
  ];

  return (
    <>

      <div className="text-white w-full text-center text-2xl font-bold">Product Table</div>
      <div className="w-full overflow-x-auto rounded-2xl 
      bg-gradient-to-br from-[#050b1f] via-[#071233] to-[#040817]
      border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]">



        <table className="w-full text-left text-sm text-gray-300">
          {/* Table Head */}
          <thead className="border-b border-white/10">
            <tr className="text-gray-400 uppercase text-xs tracking-wider">
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Domain</th>
              <th className="px-6 py-4">Author</th>
              <th className="px-6 py-4 text-center">Edit</th>
              <th className="px-6 py-4 text-center">Delete</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {blogs.map((blog, index) => (
              <tr
                key={index}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >
                <td className="px-6 py-4 font-medium text-white">
                  {blog.title}
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs
                  bg-blue-500/10 text-blue-400 border border-blue-400/20">
                    {blog.domain}
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {blog.author}
                </td>

                {/* Edit Button */}
                <td className="px-6 py-4 text-center">
                  <button className="px-4 py-1.5 text-sm
                  bg-blue-600/20 text-blue-400 border border-blue-500/30
                  hover:bg-blue-600/30 transition cursor-pointer rounded-2xl">
                    Edit
                  </button>
                </td>

                {/* Delete Button */}
                <td className="px-6 py-4 text-center">
                  <button className="px-4 py-1.5 rounded-2xl text-sm
                  bg-red-600/20 text-red-400 border border-red-500/30
                  hover:bg-red-600/30 transition cursor-pointer">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
