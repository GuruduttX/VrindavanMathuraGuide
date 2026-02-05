"use client"

import CMSActions from '@/components/Admin/CMS/CMSActions';
import CMSContentSection from '@/components/Admin/CMS/CMSContentSection';
import CMSHeader from '@/components/Admin/CMS/CMSHeader';
import CMSMediaSection from '@/components/Admin/CMS/CMSMediaSection';
import CMSMetaSection from '@/components/Admin/CMS/CMSMetaSection';
import CMSSeoSection from '@/components/Admin/CMS/CMSSeoSection';
import FaqHandler from '@/components/Admin/CMS/FaqHandler';
import { useState } from 'react';

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
  id : string, 
  question : string,
  answer : string
}



export default function CreateNewBlog() {
  const [form, setForm] = useState<BlogForm>({
    title: "",
    domain: "",
    slug: "",
    metaTitle: "",
    metaDescription: "",
    image: "",
    alt: "",
    subContent: "",
    content: ""
  });

  const [faqs , setFaqs ] = useState<FAQ[]>([])

  console.log("This is the Form Data for the create new Blog : ");
  console.log(form);

  console.log("THE DATA OF THE FAQS IS : ");
  console.log(faqs);

  const updateForm = (field : keyof BlogForm , value : string)=>{

    setForm((prev) => {
      return {...prev , [field] : value}
    })

  } 

  return (
    <div className="max-w-6xl mx-auto p-8 rounded-2xl
  bg-gradient-to-br from-[#0b1220]/80 via-[#0e1a2f]/80 to-[#0a1020]/80
  backdrop-blur-xl border border-white/10
  shadow-[0_0_60px_-15px_rgba(56,189,248,0.25)]">

      <div className='space-y-6'>
        <CMSHeader Editor="Blog" />
        <CMSMetaSection title = {form.title} domain = {form.domain} slug = {form.slug} onChange = {updateForm}/>
        <CMSSeoSection metaTitle = {form.metaTitle} metaDescription = {form.metaDescription} onChange = {updateForm}/>
        <FaqHandler faqs = {faqs} setFaqs = {setFaqs}/>
        <CMSMediaSection image = {form.image} alt = {form.alt} onChange = {updateForm}/>
        <CMSContentSection subContent={form.subContent} content = {form.content} onChange = {updateForm}/>
        <CMSActions />
      </div>

    </div>

  );
}
