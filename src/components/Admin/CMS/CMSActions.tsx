import React from 'react'

type BlogForm = {
    title: string;
    domain: string,
    slug: string,
    metaTitle: string,
    metaDescription: string,
    image: string,
    alt: string,
    subContent: string
    content: string
}

type FAQ = {
    id: string,
    question: string,
    answer: string
}

const CMSActions = ({ form, faqs } : {form : BlogForm , faqs : FAQ}) => {

    const saveHandler = () => {
        
    }

    return (

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
    )
}

export default CMSActions