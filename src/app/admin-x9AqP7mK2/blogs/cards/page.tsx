const cards = [
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Technology",
    title: "What's New in 2022 Tech",
    desc: "Keeping up with digital trends requires adapting fast and staying ahead of innovation.",
    author: "Jane Doe",
    time: "2h ago",
  },
  {
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    category: "Food",
    title: "Delicious Food",
    desc: "Explore mouth-watering dishes and culinary experiences from around the world.",
    author: "John Doe",
    time: "Yesterday",
  },
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    category: "Automobile",
    title: "Race To Your Heart Content",
    desc: "Experience speed, passion, and adrenaline through automotive storytelling.",
    author: "John Doe",
    time: "1d ago",
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Technology",
    title: "What's New in 2022 Tech",
    desc: "Keeping up with digital trends requires adapting fast and staying ahead of innovation.",
    author: "Jane Doe",
    time: "2h ago",
  },
  {
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    category: "Food",
    title: "Delicious Food",
    desc: "Explore mouth-watering dishes and culinary experiences from around the world.",
    author: "John Doe",
    time: "Yesterday",
  },
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    category: "Automobile",
    title: "Race To Your Heart Content",
    desc: "Experience speed, passion, and adrenaline through automotive storytelling.",
    author: "John Doe",
    time: "1d ago",
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Technology",
    title: "What's New in 2022 Tech",
    desc: "Keeping up with digital trends requires adapting fast and staying ahead of innovation.",
    author: "Jane Doe",
    time: "2h ago",
  },
  {
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    category: "Food",
    title: "Delicious Food",
    desc: "Explore mouth-watering dishes and culinary experiences from around the world.",
    author: "John Doe",
    time: "Yesterday",
  },
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    category: "Automobile",
    title: "Race To Your Heart Content",
    desc: "Experience speed, passion, and adrenaline through automotive storytelling.",
    author: "John Doe",
    time: "1d ago",
  },
];



export default function ProductCards() {
  return (
    <section className="min-h-screen p-6 md:p-10">

      <div
        className="grid gap-8 cursor-pointer"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {cards.map((card, index) => (
          <article
            key={index}
            className="group relative rounded-2xl overflow-hidden
            bg-gradient-to-br from-[#0b1437] to-[#060b1f]
            border border-white/10
            shadow-[0_10px_40px_rgba(0,0,0,0.6)]
            hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]
            transition-all duration-300"
          >


            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                className="w-full h-full object-cover
                group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <span className="inline-block mb-3 px-3 py-1 text-xs font-medium
                rounded-full bg-blue-500/10 text-blue-400 border border-blue-400/20">
                {card.category}
              </span>

              <h3 className="text-base font-semibold text-white mb-2">
                {card.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                {card.desc}
              </p>

              {/* ACTION BUTTONS */}
              <div className="flex justify-between transition mt-5">
                <button
                  className="w-18 h-10 rounded-3xl
                bg-blue-600/20 border border-blue-500/30
                hover:bg-blue-600/30 transition text-white cursor-pointer"
                >
                  Edit
                </button>

                <button
                  className="w-18 h-10 rounded-3xl
                bg-red-600/20 text-white
                border border-red-500/30
                hover:bg-red-600/30 transition cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10" />
                <span className="text-sm text-gray-300">
                  {card.author}
                </span>
              </div>

              <span className="text-xs text-gray-500">
                {card.time}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
