import React from 'react'

const CMSMediaSection = ({ image, alt, onChange }: { image: string, alt: string, onChange: any }) => {
    return (
        <div className='space-y-6'>
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

            <div>
                <label className="text-sm text-white/70">Alt Tag For Image</label>
                <input
                    onChange={(e) => { onChange("alt", e.target.value) }}
                    placeholder="A Way to Grow Your Online Business"
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                />
            </div>
        </div>
    )
}

export default CMSMediaSection