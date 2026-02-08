import React, { useState } from 'react'

type Testimonials = {
    name: string,
    description: string
}

const packagetestimonials = () => {

    const [testimonials, setTestimonials] = useState<Testimonials[]>([]);



    return (
        <div className='w-full'>

            {testimonials.map((testimonial) => (
                <div className="">
                    This is the testimonial part of the section
                </div>
            ))}

        </div>
    )
}

export default packagetestimonials