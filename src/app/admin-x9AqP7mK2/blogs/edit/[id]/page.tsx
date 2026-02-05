"use client"

import CMSActions from '@/components/Admin/CMS/CMSActions';
import CMSContentSection from '@/components/Admin/CMS/CMSContentSection';
import CMSHeader from '@/components/Admin/CMS/CMSHeader';
import CMSMediaSection from '@/components/Admin/CMS/CMSMediaSection';
import CMSMetaSection from '@/components/Admin/CMS/CMSMetaSection';
import CMSSeoSection from '@/components/Admin/CMS/CMSSeoSection';
import FaqHandler from '@/components/Admin/CMS/FaqHandler';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/SupabaseConfig';


type FAQ = {
  id: string;
  question: string;
  answer: string;
};

type BlogForm = {
  title: string;
  domain: string;
  slug: string;
  author : string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  alt: string;
  subContent: string;
  content: string;
};


export default  function BlogEditor({params} : {params : {id : string}}) {
     const id =  "3c1c3f76-6e28-47c3-a9c8-e4f621e8e81b";
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
      content: "",
    });

    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(true);

    

  
  useEffect(()=>{
    const getBlogs = async()=>{
        const {data, error} = await supabase.from('Blog').select('*').eq('id',id).single();

        if(error){
          console.log(error);
          return;
        }

        setForm({
          title: data.title ?? "",
          domain: data.domain ?? "",
          slug: data.slug ?? "",
          author : data.author ?? "",
          metaTitle: data.meta?.title ?? "",
          metaDescription: data.meta?.description ?? "",
          image: data.image ?? "",
          alt: data.alt ?? "",
          subContent: data.subcontent ?? "",
          content: data.content ?? "",
      });

      setFaqs(data.faqs ?? []);
      setLoading(false);
    }
    getBlogs();
  },[id]);

  //Saving data

 const handleSave = async () => {
    await supabase.from("Blog").update({
      title: form.title,
      domain: form.domain,
      author : form.author,
      slug: form.slug,
      image: form.image,
      alt: form.alt,
      subcontent: form.subContent,
      content: form.content,
      meta: {
        title: form.metaTitle,
        description: form.metaDescription,
      },
      faqs: faqs,
    }).eq("id", id);
  };

  

  const handlePreview = () => {
  };

  const handlePublish = async () => {
    // await publishPackageAction(packageId);
  };

  // onChange handler
  const updateForm = (field : keyof BlogForm,value : string)=>{
    setForm((prev)=>({...prev, [field]:value}));
  }

  if (loading) return <p className="text-white">Loading...</p>;

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
                onChange={(e) => { updateForm("metaDescription", e.target.value) }}
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
         actionType='update'
         editorType='Blog'
         onSave={handleSave} 
         onPreview={handlePreview}
         onPublish={handlePublish} />
      </div>

    </div>

  );
}
