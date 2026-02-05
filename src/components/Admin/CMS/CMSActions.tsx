import React from 'react'

interface CMSActionsProps {
    actionType : 'create' | 'update';
    editorType : "Blog" | "Package"
    onSave : ()=>void;
    onPreview : ()=>void;
    onPublish : ()=>void;
    loading? :boolean;
}

const CMSActions = ({actionType, editorType, 
               onSave, onPreview, onPublish,
     loading = false}: CMSActionsProps
    ) => {
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

    return (
        
        <div className="mt-10 flex gap-4">
            <button onClick={onSave} disabled={loading} className="px-6 py-3 rounded-xl bg-sky-600 text-white
            hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/30
            transition active:scale-95">
                {actionType==='update' ?  "Update" : "Save"}
            </button>

            {onPreview && (
                <button
                onClick={onPreview}
                className="px-6 py-3 rounded-xl bg-slate-600 text-white
                hover:bg-slate-500 transition active:scale-95"
                >
                   Preview
                </button>
             )}

           {onPublish && (
            <button onClick={onPublish} disabled className="px-6 py-3 rounded-xl bg-emerald-600 text-white
              hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30
                transition active:scale-95">
                Publish
            </button>
             )
           }

            <span className="ml-auto text-sm text-gray-400 self-center">
              Editing {editorType}
            </span>
        </div>
    )
}

export default CMSActions