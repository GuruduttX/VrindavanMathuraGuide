import DestinationDropdown from '@/utils/search/DestinationDropDown'
import { Calendar, Search, Users } from 'lucide-react'
import React from 'react'
import CategoryDropDown from './CategoryDropDown'

const SearchBar = () => {
    return (

        <div
            className="mt-10 rounded-4xl bg-white/90 p-4 sm:p-5 shadow-lg shadow-orange-400 backdrop-blur-md hover:shadow-xl hover:shadow-yellow-500 transition border-2 border-orange-400 ">
            <div
                className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-3 sm:gap-4
          "
            >
                {/* Destination */}
                <DestinationDropdown />

                {/* Category */}
                <CategoryDropDown/>
                

                {/* Travelers */}
                <div
                    className="
              flex items-center gap-3
              rounded-xl
              bg-orange-50
              px-4
              py-3 sm:py-3.5
            "
                >
                    <Users className="text-black shrink-0" />
                    <input
                        type="number"
                        placeholder="No. Of Travelers"
                        className="
                w-full
                bg-transparent
                text-sm sm:text-base
                outline-none
              "
                    />
                </div>

                {/* Button */}
                <button
                    className="
              flex items-center justify-center gap-2
              rounded-3xl
              bg-gradient-to-r from-orange-500 to-orange-600
              px-6
              py-3 sm:py-3.5
              font-semibold
              text-white
              transition-all
              hover:scale-[1.02]
              hover:shadow-lg
              w-full cursor-pointer
            "
                >
                    <Search size={18} />
                    Search
                </button>
            </div>

        </div>
    )
}

export default SearchBar