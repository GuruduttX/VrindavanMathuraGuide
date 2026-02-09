import React, { useState } from 'react'

type Testimonials = {
    id: string,
    name : string,
    description : string
}

const Testimonials = ({ testimonials, setTestimonials }: { testimonials: Testimonials[], setTestimonials: React.Dispatch<React.SetStateAction<Testimonials[]>>, editorType : "Blog" | "Package" }) => {


    const handleAddFaq = () => {

        setTestimonials((prev) => {

            return [...prev, { id: crypto.randomUUID(), name : "", description : "" }]

        });

    }

    
    const handleDeleteTestimonial = (TestimonialId: string) => {
        setTestimonials((prev) => {
            return prev.filter((testimonial) => testimonial.id != TestimonialId)
        })
    }

    const handleNameChange = (TestimonialId: string, value: string) => {
        setTestimonials((prev) => {
            return prev.map((testimonial) => {
                return testimonial.id == TestimonialId ? {
                    ...testimonial,
                    name : value
                } : testimonial
            })
        })
    }

    const handleDescriptionChange = (TestimonialId: string, value: string) => {
        setTestimonials((prev) => {
            return prev.map((testimonial) => {
                return testimonial.id == TestimonialId ? {
                    ...testimonial,
                    description : value
                } : testimonial
            })
        })
    }

    return (
        <div className='border-2 border-indigo-500 rounded-3xl w-full p-8 shadow-md shadow-indigo-500 hover:shadow-lg cursor-pointer transition'>
            <div className='w-full text-3xl text-extrabold text-white text-center mb-5'>Testimonials</div>
            {testimonials.map((testimonial: Testimonials) => (
                <div key={testimonial.id} className='border-2 border-indigo-500 rounded-3xl w-full p-6 shadow-md shadow-indigo-500 cursor-pointer mb-5'>
                    <input
                        required
                        type='text'
                        placeholder='Enter The Name Of The Candidate'
                        className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                        value={testimonial.name}
                        onChange={(e) => { handleNameChange(testimonial.id, e.target.value) }}

                    />

                    <textarea rows={3}
                        required
                        placeholder="Enter The Description Of About the Candidate"
                        className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-sky-500 transition resize-none"
                        value={testimonial.description}
                        onChange={(e) => { handleDescriptionChange(testimonial.id, e.target.value) }}
                    >

                    </textarea>

                    <div className='mt-4'>
                        <button className='px-3 py-2 rounded-3xl text-white cursor-pointer bg-red-400 hover:bg-red-500 transition' onClick={() => handleDeleteTestimonial(testimonial.id)}>
                            Delete Button
                        </button>
                    </div>
                </div>
            ))}

            <div className='mt-10 w-full flex justify-center'>
                <button type='button' onClick={handleAddFaq} className='px-16 py-4 rounded-4xl bg-[#080874] text-white hover:bg-green-500 cursor-pointer transition'>
                    Add Testimonials
                </button>
            </div>

        </div>
    )
}

export default Testimonials