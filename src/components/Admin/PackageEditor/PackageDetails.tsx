import React from 'react'

const PackageDetails = ({ price , duration , onChange }: { price : string, duration: string, onChange: any , editorType : "Blog" | "Package"}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="text-sm text-white/70">Price</label>
                <input
                    value={price}
                    required
                    type='number'
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                    onChange={(e) => { onChange("price", e.target.value) }}
                />
            </div>

            <div>
                <label className="text-sm text-white/70">Duration</label>
                <input
                    value={duration}
                    required
                    onChange={(e) => { onChange("duration", e.target.value) }}
                    type='number '
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                        border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                />
            </div>
        </div>
    )
}

export default PackageDetails