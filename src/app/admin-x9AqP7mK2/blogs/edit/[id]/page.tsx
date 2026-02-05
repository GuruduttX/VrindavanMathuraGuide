"use client"

import dynamic from 'next/dynamic';
import "suneditor/dist/css/suneditor.min.css";


const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});


export default function BlogEditor() {
  return (
    <div className="max-w-6xl mx-auto p-8 rounded-2xl
  bg-gradient-to-br from-[#0b1220]/80 via-[#0e1a2f]/80 to-[#0a1020]/80
  backdrop-blur-xl border border-white/10
  shadow-[0_0_60px_-15px_rgba(56,189,248,0.25)]">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
          Blog Editor
        </h2>
        <div className="mt-2 h-[2px] w-32 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full" />
      </div>

      <div className="space-y-6">

        {/* Blog Title */}
        <div>
          <label className="text-sm text-white/70">Blog Title</label>
          <input
            placeholder="A Way to Grow Your Online Business With Digital Marketing"
            className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
          placeholder-white/40 border border-white/10
          focus:ring-2 focus:ring-sky-500 transition"
          />
        </div>

        {/* Domain */}
        <div>
          <label className="text-sm text-white/70">Domain</label>
          <select
            className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
          border border-white/10 focus:ring-2 focus:ring-sky-500 transition cursor-pointer">
            <option className="bg-[#0b1220]">Digital Marketing</option>
            <option className="bg-[#0b1220]">SEO</option>
            <option className="bg-[#0b1220]">Technology</option>
          </select>
        </div>

        {/* Meta Title + Meta Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-white/70">Meta Title</label>
            <input
              placeholder="A Human Approach to Digital Marketing"
              className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
            />
          </div>

          <div>
            <label className="text-sm text-white/70">Meta Description</label>
            <input
              placeholder="Growing an online business isn’t easy..."
              className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
            />
          </div>
        </div>

        {/* Slug + Alt Tag */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-white/70">Slug</label>
            <input
              placeholder="a-human-approach-to-digital-marketing"
              className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
            />
          </div>

          <div>
            <label className="text-sm text-white/70">Alt Tag For Image</label>
            <input
              placeholder="A Way to Grow Your Online Business"
              className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
            />
          </div>
        </div>

        {/* SubContent */}
        <div>
          <label className="text-sm text-white/70">Sub Content</label>
          <textarea
            rows={5}
            placeholder="Let’s be real for a second..."
            className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
          border border-white/10 focus:ring-2 focus:ring-sky-500 transition resize-none"
          />
        </div>

        {/* Blog Image Upload */}
        <div>
          <label className="text-sm text-white/70">Blog Image</label>
          <div className="mt-3 rounded-xl border-2 border-dashed border-white/20
        p-6 text-center cursor-pointer
        hover:border-sky-400 hover:bg-white/5 transition">
            <p className="text-white/60 text-sm">
              Drag & drop image or <span className="text-sky-400">Upload</span>
            </p>
            <p className="text-xs text-white/40 mt-1">PNG, JPG up to 5MB</p>
          </div>
        </div>

        <div className="dark-sun-editor h-[85vh] w-full rounded-2xl p-5 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-indigo-400 border border-indigo-400 shadow-indigo-400 hover:border-2 hover:border-indigo-400">

          <SunEditor

            defaultValue="<p><strong>Welcome!</strong> Start writing your course content here.</p>"
            setOptions={{
              minHeight: "65vh",
              maxHeight: "70vh",
              buttonList: [
                ["undo", "redo"],
                ["formatBlock"],   // H1, H2, H3 works here
                ["bold", "italic", "underline"],
                ["list"],
                ["align"],
                ["link", "image"],
                ["table"],
                
              ],
            }}

          // onChange={(content) => {
          //   setEditorContent(content);
          // }}
          />
        </div>

      </div>

      {/* Actions */}
      <div className="mt-10 flex gap-4">
        <button className="px-6 py-3 rounded-xl bg-sky-600 text-white
      hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/30
      transition active:scale-95">
          Save
        </button>

        <button className="px-6 py-3 rounded-xl bg-slate-600 text-white
      hover:bg-slate-500 transition active:scale-95">
          Preview
        </button>

        <button className="px-6 py-3 rounded-xl bg-emerald-600 text-white
      hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30
      transition active:scale-95">
          Publish
        </button>
      </div>
    </div>

  );
}
