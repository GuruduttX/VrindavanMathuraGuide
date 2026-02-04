import { Star } from "lucide-react";
import { FloatingInput } from "@/utils/FloatingInput"; 
import { FloatingTextarea } from "@/utils/FloatingTextarea";

export default function SideForm() {
  return (
    <div className="w-full  max-w-sm z-10 ">

      {/* PRICE CARD */}
      {/* <div className="bg-white rounded-2xl border p-5 mb-6 shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xl font-bold text-gray-900">
              ₹4,999 <span className="text-sm font-normal text-gray-500">/per adult</span>
            </p>
            <p className="text-sm text-gray-400 line-through">
              ₹6,299
            </p>
          </div>

          <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
            <Star className="w-4 h-4 fill-green-600" /> 4.5 <span className="text-gray-500">(40)</span>
          </div>
        </div>

        <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600
          text-white font-semibold py-3 rounded-xl">
          Send Enquiry
        </button>
      </div> */}

      {/* FORM CARD */}
      <div className="bg-white rounded-2xl border border-gray-400 p-6 shadow-lg">
        <h3 className="font-semibold text-gray-900 mb-4">
          Enquire About This Package
        </h3>

        <div className="space-y-4">
          <FloatingInput label="Full Name" required />
          <FloatingInput label="Email" type="email" required />

          <div className="flex gap-2">
            <div className="w-20 border rounded-xl flex items-center justify-center text-sm">
              +91
            </div>
            <div className="flex-1">
              <FloatingInput label="Phone Number" required />
            </div>
          </div>
          <div className="relative">
            <input
                type="date"
                required
                placeholder=" "
                className="peer w-full rounded-xl border border-gray-300 px-4 pt-5 pb-2
                text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-200"
            />
            <label
                className="absolute    
                left-2
                top-1
                text-xs
                peer-focus:text-orange-600"
            >
                {"Trave Date" }{" *"}
            </label>
       </div>

          {/* <FloatingInput label="Travel Date" type="date" required /> */}
          <FloatingInput label="Traveller Count" required />

          <FloatingTextarea label="Message" />

          <button className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer
            text-white font-semibold py-3 rounded-xl">
            Send Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}
