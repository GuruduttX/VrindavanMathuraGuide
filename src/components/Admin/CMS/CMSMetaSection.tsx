import React from 'react'

const CMSMetaSection = ({ title, domain, slug, onChange, editorType }: { title: string, domain: string, slug: string, onChange: any , editorType : "Blog" | "Package"}) => {
    return (
        <div className="space-y-6">
            {/* Blog Title */}
            <div>
                <label className="text-sm text-white/70">Blog Title</label>
                <input
                    value={title}
                    placeholder="A Way to Grow Your Online Business With Digital Marketing"
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                             placeholder-white/40 border border-white/10
                               focus:ring-2 focus:ring-sky-500 transition"

                    onChange={(e) => { onChange("title", e.target.value) }}
                />
            </div>

            {/* Domain + Slug */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-sm text-white/70">Domain</label>
                    <select
                        value={domain}
                        onChange={(e) => { onChange("domain", e.target.value) }}
                        className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
          border border-white/10 focus:ring-2 focus:ring-sky-500 transition cursor-pointer">
                        <option className="bg-[#0b1220]">Digital Marketing</option>
                        <option className="bg-[#0b1220]">SEO</option>
                        <option className="bg-[#0b1220]">Technology</option>
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