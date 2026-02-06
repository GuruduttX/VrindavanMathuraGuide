"use client"

import CMSActions from '@/components/Admin/CMS/CMSActions';
import CMSContentSection from '@/components/Admin/CMS/CMSContentSection';
import CMSHeader from '@/components/Admin/CMS/CMSHeader';
import CMSMediaSection from '@/components/Admin/CMS/CMSMediaSection';
import CMSMetaSection from '@/components/Admin/CMS/CMSMetaSection';
import CMSSeoSection from '@/components/Admin/CMS/CMSSeoSection';
import FaqHandler from '@/components/Admin/CMS/FaqHandler';
import { useState } from 'react';
import { supabase } from '@/lib/supabase/SupabaseConfig';

type BlogForm = {
  title: string;
  domain: string,
  slug: string,
  author : string,
  metaTitle: string,
  metaDescription: string,
  image: string,
  alt: string,
  subContent: string
  content: string
}

type FAQ = {
  id : string, 
  question : string,
  answer : string
}



export default function CreateNewBlog() {
  const [form, setForm] = useState<BlogForm>({
    title: "",
    domain: "",
    slug: "",
    author : "",
    metaTitle: "",
    metaDescription: "",
    image: "",
    alt: "",
    subContent: "",
    content: ""
  });

  const [faqs , setFaqs ] = useState<FAQ[]>([])

  // console.log("This is the Form Data for the create new Blog : ");
  // console.log(form);

  // console.log("THE DATA OF THE FAQS IS : ");
  // console.log(faqs);

  const updateForm = (field : keyof BlogForm , value : string)=>{

    setForm((prev) => {
      return {...prev , [field] : value}
    })

  }
  
   const handleSave = async () => {
    // await savePackageAction({
    //   form,
    //   faqs,
    //   seo,
    // });
    console.log("hi")
    const payload = {title:form.title, domain : form.domain, slug : form.slug,
       meta : {title : form.metaTitle, description : form.metaDescription}, image : form.image, alt : form.alt
        , subcontent : form.subContent, content: form.content, author : form.author, faqs};

    const {data : createdData , error} = await supabase.from('Blog').insert(payload).select('*').single();
    
    if(error){
       console.log(error.message);
       return;
    }
    console.log("Blog created", createdData);
  };

  const handlePreview = () => {
  };

  const handlePublish = async () => {
    // await publishPackageAction(packageId);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 rounded-2xl
      bg-gradient-to-br from-[#0b1220]/80 via-[#0e1a2f]/80 to-[#0a1020]/80
      backdrop-blur-xl border border-white/10
      shadow-[0_0_60px_-15px_rgba(56,189,248,0.25)]">

      <div className='space-y-6'>
        <CMSHeader editorType="Blog" />
        <CMSMetaSection title = {form.title} domain = {form.domain} slug = {form.slug} onChange = {updateForm} editorType="Blog"/>
        <div>
            <label className="text-sm text-white/70">Meta Description</label>
            <input
                value={form.author}
                onChange={(e) => { updateForm("author", e.target.value) }}
                placeholder="Growing an online business isn’t easy..."
                className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                    border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
            />
        </div>
        <CMSSeoSection metaTitle = {form.metaTitle} metaDescription = {form.metaDescription} onChange = {updateForm} editorType="Blog"/>
        <FaqHandler faqs = {faqs} setFaqs = {setFaqs} editorType="Blog"/>
        <CMSMediaSection image = {form.image} alt = {form.alt} onChange = {updateForm} editorType="Blog"/>
        <CMSContentSection subContent={form.subContent} content = {form.content} onChange = {updateForm} editorType="Blog"/>
        <CMSActions 
         actionType='create'
         editorType='Blog'
         onSave={handleSave} 
         onPreview={handlePreview}
         onPublish={handlePublish} />
      </div>

    </div>

  );
}
