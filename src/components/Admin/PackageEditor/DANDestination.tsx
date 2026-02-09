import React from 'react'

export const destinations = [

    "Shri Krishna Janmabhoomi",
    "Dwarkadhish Temple",
    "Vishram Ghat",
    "Gita Mandir",
    "Govardhan Mandir",
    "Government Museum",
    "Kans Qila",
    "Jama Masjid",
    "Banke Bihari Temple",
    "ISKCON Temple",
    "Prem Mandir",
    "Radha Raman Temple",
    "Radha Vallabh Temple",
    "Shahji Temple",
    "Madan Mohan Temple",
    "Seva Kunj",
    "Nidhivan",
    "Keshi Ghat",
    "Imli Tala",
    "Govardhan Hill",
    "Govardhan Parikrama",
    "Mansi Ganga",
    "Punchari Ka Lotha",
    "Radha Kund",
    "Shyam Kund",
    "Kusum Sarovar",
    "Suraj Kund",
    "Radha Rani Temple",
    "Rangeeli Mahal",
    "Mor Kutir",
    "Lathmar Holi Site",
    "Nand Bhavan",
    "Pan Sarovar",
    "Charan Pahadi",
    "Nand Bhavan",
    "Chaurasi Khamba",
    "Raman Reti",
    "Brahmand Ghat",
    "Dauji Temple",
    "Huranga Holi Site"

];




const DANDestination = ({ day , night, destination , onChange, editorType }: { day: number, night: number, destination: string, onChange: any, editorType: "Blog" | "Package" }) => {
    return (
        <div className="space-y-6">
            {/* Blog Title */}



            <div>
                <label className="text-sm text-white/70">Destinations</label>
                <select
                    required
                    value={destination}
                    onChange={(e) => onChange("destination", e.target.value)}
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                        border border-white/10 focus:ring-2 focus:ring-sky-500 transition cursor-pointer"
                >

                    <option value="">Select Destinations</option>
                    {
                        destinations.map((des, index) => {
                            return <option value={des} className="bg-[#0b1220]">
                                {des}
                            </option>


                        })
                    }

                </select>
            </div>

            {/* Day and Night */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                    <label className="text-sm text-white/70">Day</label>
                    <input
                        value={day}
                        type='number'
                        className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                             placeholder-white/40 border border-white/10
                               focus:ring-2 focus:ring-sky-500 transition"
                        required

                        onChange={(e) => { onChange("day", e.target.value) }}
                    />
                </div>

                <div>
                    <label className="text-sm text-white/70">Night</label>
                    <input
                        value={night}
                        onChange={(e) => { onChange("night", e.target.value) }}
                        className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                    />
                </div>

            </div>
        </div>
    )
}

export default DANDestination