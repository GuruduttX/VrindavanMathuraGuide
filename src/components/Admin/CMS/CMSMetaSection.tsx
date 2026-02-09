import React from 'react'

const CMSMetaSection = ({ title, category, slug, onChange, editorType }: { title: string, category: string, slug: string, onChange: any , editorType : "Blog" | "Package"}) => {
    return (
        <div className="space-y-6">
            {/* Blog Title */}
            <div>
                <label className="text-sm text-white/70">{editorType} Title</label>
                <input
                    value={title}
                    placeholder="A Way to Grow Your Online Business With Digital Marketing"
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                             placeholder-white/40 border border-white/10
                               focus:ring-2 focus:ring-sky-500 transition"
                    required

                    onChange={(e) => { onChange("title", e.target.value) }}
                />
            </div>

            {/* category + Slug */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                    <label className="text-sm text-white/70">Category</label>
                    <select
                        required
                        value={category}
                        onChange={(e) => onChange("category", e.target.value)}
                        className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                        border border-white/10 focus:ring-2 focus:ring-sky-500 transition cursor-pointer"
                    >
                        <option value="">Select Category</option>

                        <option value="travel" className="bg-[#0b1220]">
                        Travel
                        </option>

                        <option value="spiritual" className="bg-[#0b1220]">
                        Spiritual
                        </option>

                        <option value="culture" className="bg-[#0b1220]">
                        Culture
                        </option>
                    </select>
                </div>


                <div>
                    <label className="text-sm text-white/70">Slug</label>
                    <input
                        value={slug}
                        onChange={(e) => { onChange("slug", e.target.value) }}
                        placeholder="a-human-approach-to-digital-marketing"
                        className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                    />
                </div>

            </div>
        </div>
    )
}

export default CMSMetaSection