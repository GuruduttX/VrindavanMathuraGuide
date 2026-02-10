"use client"
import CMSActions from '@/components/Admin/CMS/CMSActions';
import CMSContentSection from '@/components/Admin/CMS/CMSContentSection';
import CMSHeader from '@/components/Admin/CMS/CMSHeader';
import CMSMediaSection from '@/components/Admin/CMS/CMSMediaSection';
import CMSMetaSection from '@/components/Admin/CMS/CMSMetaSection';
import CMSSeoSection from '@/components/Admin/CMS/CMSSeoSection';
import FaqHandler from '@/components/Admin/CMS/FaqHandler';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { supabase } from '@/lib/supabase/SupabaseConfig';
import toast from 'react-hot-toast';
import PackageDetails from '@/components/Admin/PackageEditor/PackageDetails';
import TripHighlights from '@/components/Admin/PackageEditor/TripHighlights';
import Inclusion from '@/components/Admin/PackageEditor/Inclusion';
import Exclusion from '@/components/Admin/PackageEditor/Exclusion';
import Policy from '@/components/Admin/PackageEditor/Policy';
import Document from '@/components/Admin/PackageEditor/Document';
import Testimonials from '@/components/Admin/PackageEditor/Testimonials';
import ItinearyMaker from '@/components/Admin/PackageEditor/Itinerary';
import { useParams } from 'next/navigation';
import DurationSection from '@/components/Admin/PackageEditor/DurationSection';

type PackageForm = {
  title: string;
  category: string,
  slug: string,
  price: "",
  duration: "",
  metaTitle: string,
  metaDescription: string,
  image: string,
  alt: string,
  refund: string,
  cancel: string,
  confirmation: string,
  payment: string,
  day : number;
  night : number;
}

type FAQ = {
  id: string,
  question: string,
  answer: string
}

type Testimonial = {
  id: string,
  name: string,
  description: string
}

type HighLights = {
  id: string
  description: string
}

type Inclusions = {
  id: string
  description: string
}

type Exclusions = {
  id: string
  description: string
}

type Documents = {
  id: string
  description: string
}

type Itinerary = {
  id: string
  day: number,
  title: string,
  description: string
}

type BreakdownItem = {
   id : string;
   days : number;
   place : string;
}




export default function CreateNewPackage() {

  const { id } = useParams();

  const [form, setForm] = useState<PackageForm>({
    title: "",
    category: "",
    slug: "",
    price: "",
    day : 0,
    night :  0,
    duration: "",
    metaTitle: "",
    metaDescription: "",
    image: "",
    alt: "",
    refund: "",
    cancel: "",
    confirmation: "",
    payment: "",
   
  });

  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [highLights, setHighLights] = useState<HighLights[]>([]);
  const [inclusions, setInclusions] = useState<Inclusions[]>([]);
  const [exclusions, setExclusions] = useState<Exclusions[]>([]);
  const [documents, setDocuments] = useState<Documents[]>([]);
  const [itinerary, setItinerary] = useState<Itinerary[]>([]);
  const [breakdown, setBreakdown] = useState<BreakdownItem[]>([
        { id: crypto.randomUUID(), days: 1, place: "" },
      ]);

  useEffect(() => {
    const getBlogs = async () => {
      const { data, error } = await supabase.from('Package').select('*').eq('id', id).single();

      if (error) {
        console.log(error);
        return;
      }

      setForm({
        title: data.title ?? "",
        price: data.price,
        duration: data.duration,
        category: data.category ?? "",
        slug: data.slug ?? "",
        metaTitle: data.meta?.title ?? "",
        metaDescription: data.meta?.description ?? "",
        image: data.heroimage.image ?? "",
        alt: data.heroimage.alt ?? "",
        refund: data.refund ?? "",
        cancel: data.cancel ?? "",
        confirmation: data.confirmation ?? "",
        payment: data.payment ?? "",
        day : data.day ?? "",
        night : data.day ?? ""
      });

      setFaqs(data.faqs ?? []);

      setTestimonials(data.testimonials ?? [])
      setHighLights(data.highlights ?? [])
      setInclusions(data.inclusions ?? [])
      setExclusions(data.exclusions ?? [])
      setDocuments(data.documents ?? [])
      setItinerary(data.itinerary ?? [])
      setBreakdown(data.breakdown ?? []);

    }

    getBlogs();

  }, [id]);


  const updateForm = (field: keyof PackageForm, value: string) => {

    setForm((prev) => {
      return { ...prev, [field]: value }
    })

  }

  const handleSave = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // browser validation check
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }

    if (!form.image) {
      toast.error("Package image is missing");
      return;
    };

    if (!form.category) {
      toast.error("Package category is missing");
      return;
    }

    const { data: existingData, error: existingError } = await supabase
      .from("Package")
      .select("id")
      .eq("slug", form.slug);

     if (existingData &&  (existingData.length > 1 ||  (existingData?.length==1 && existingData[0].id !== id))) {
      toast.error("Slug already exists");
      return;
    }


    const payload = {
      title: form.title,
      category: form.category,
      slug: form.slug,
      price: form.price,
      heroimage: {
        image: form.image,
        alt: form.alt
      },
      duration: form.duration,
      meta: {
        title: form.metaTitle,
        description: form.metaDescription
      },
      refund: form.refund,
      cancel: form.cancel,
      confirmation: form.confirmation,
      payment: form.payment,
      faqs,
      testimonials,
      highlights: highLights,
      inclusions,
      exclusions,
      documents,
      itinerary,
      durationbreakdown : breakdown
    };

    const { data, error } = await supabase
      .from("Package")
      .update(payload)
      .eq("id", id)

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Package Published Successfully");
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

      <form className='space-y-6' onSubmit={handleSave}>
        <CMSHeader editorType="Package" />
        <CMSMetaSection title={form.title} category={form.category} slug={form.slug} onChange={updateForm} editorType="Package" />
        <PackageDetails price={form.price} duration={form.duration} onChange={updateForm} editorType="Package" />
        <CMSSeoSection metaTitle={form.metaTitle} metaDescription={form.metaDescription} onChange={updateForm} editorType="Package" />
        <DurationSection days={form.day} nights={form.night} onChange={updateForm} breakdown={breakdown} setBreakdown={setBreakdown} />
        
        <ItinearyMaker itinerary={itinerary} setItinerary={setItinerary} editorType='Package' />
        <FaqHandler faqs={faqs} setFaqs={setFaqs} editorType="Package" />
        <TripHighlights highLights={highLights} setHighLights={setHighLights} editorType='Package' />
        <Inclusion inclusions={inclusions} setInclusions={setInclusions} editorType='Package' />
        <Exclusion exclusions={exclusions} setExclusions={setExclusions} editorType='Package' />
        <Testimonials testimonials={testimonials} setTestimonials={setTestimonials} editorType='Package' />
        <Document documents={documents} setDocuments={setDocuments} editorType='Package' />
        <Policy refund={form.refund} cancel={form.cancel} confirm={form.confirmation} payment={form.payment} editorType='Package' onChange={updateForm} />
        <CMSMediaSection image={form.image} alt={form.alt} onChange={updateForm} editorType="Package" />
        <CMSActions actionType='create' editorType='Package' onPreview={handlePreview} onPublish={handlePublish} />
      </form>

    </div>

  );
}
