"use client"
import CMSActions from '@/components/Admin/CMS/CMSActions';
import CMSHeader from '@/components/Admin/CMS/CMSHeader';
import CMSMediaSection from '@/components/Admin/CMS/CMSMediaSection';
import CMSMetaSection from '@/components/Admin/CMS/CMSMetaSection';
import CMSSeoSection from '@/components/Admin/CMS/CMSSeoSection';
import FaqHandler from '@/components/Admin/CMS/FaqHandler';
import { useState } from 'react';
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
import DANDestination from '@/components/Admin/PackageEditor/DANDestination';
import ChildImagePicker from '@/components/Admin/PackageEditor/ChildImagePicker';
import CMSSchema from '@/components/Admin/CMS/CMSSchema';

type PackageForm = {
  title: string;
  category: string,
  slug: string,
  price: "",
  duration: "",
  metaTitle: string,
  metaDescription: string,
  schemaTitle : string,
  schemaDescription : string,
  image: string,
  alt: string,
  refund: string,
  cancel: string,
  confirmation: string,
  payment: string,
  day: number,
  night: number,
  destination: string
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

type ChildImage = {
  id: string;
  image: string;
  alt: string;
};





export default function CreateNewPackage() {

  const [form, setForm] = useState<PackageForm>({
    title: "",
    category: "",
    slug: "",
    price: "",
    duration: "",
    day: 0,
    night: 0,
    destination: "",
    metaTitle: "",
    metaDescription: "",
    schemaTitle : "",
    schemaDescription : "",
    image: "",
    alt: "",
    refund: "",
    cancel: "",
    confirmation: "",
    payment: "",
  });

  const[childImage , setChildImage] = useState<ChildImage[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [highLights, setHighLights] = useState<HighLights[]>([]);
  const [inclusions, setInclusions] = useState<Inclusions[]>([]);
  const [exclusions, setExclusions] = useState<Exclusions[]>([]);
  const [documents, setDocuments] = useState<Documents[]>([]);
  const [itinerary, setItinerary] = useState<Itinerary[]>([]);


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

    if(childImage.length < 4){
      toast.error(`You Only Add ${childImage.length} Child Images But We Need To Add 4 Child Images : `)
    }

    const { data: existingData, error: existingError } = await supabase
      .from("Package")
      .select("id")
      .eq("slug", form.slug);

    if (existingData && existingData?.length > 0) {
      toast.error("Slug already exists");
      return;
    }


    const payload = {
      title: form.title,
      category: form.category,
      slug: form.slug,
      price: form.price,
      day : form.day,
      night : form.night,
      destination : form.destination,
      heroimage: {
        image: form.image,
        alt: form.alt
      },
      duration: form.duration,
      meta: {
        title: form.metaTitle,
        description: form.metaDescription
      },
      schema : {
        title : form.schemaTitle,
        description : form.schemaDescription
      },
      policies: [
        {
          id : crypto.randomUUID(),
          title : "Refund Policy",
          description : form.refund
        },
        {
          id : crypto.randomUUID(),
          title : "Cancel Policy",
          description : form.cancel
        },
       {
          id : crypto.randomUUID(),
          title : "Confirmation  Policy",
          description : form.confirmation
        },
        {
          id : crypto.randomUUID(),
          title : "Payment Ploicy",
          description : form.payment
        }

      ],
      faqs,
      testimonials,
      highlights: highLights,
      inclusions,
      exclusions,
      documents,
      itinerary
    };

    const { data, error } = await supabase
      .from("Package")
      .insert(payload)
      .select("*")
      .single();

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
        <DANDestination day={form.day} night={form.night} destination={form.destination} onChange={updateForm} editorType='Package' />
        <CMSSeoSection metaTitle={form.metaTitle} metaDescription={form.metaDescription} onChange={updateForm} editorType="Package" />
        <CMSSchema schemaTitle={form.schemaTitle} schemaDescription={form.schemaDescription} onChange={updateForm} editorType='Package' />
        <ItinearyMaker itinerary={itinerary} setItinerary={setItinerary} editorType='Package' />
        <FaqHandler faqs={faqs} setFaqs={setFaqs} editorType="Package" />
        <TripHighlights highLights={highLights} setHighLights={setHighLights} editorType='Package' />
        <Inclusion inclusions={inclusions} setInclusions={setInclusions} editorType='Package' />
        <Exclusion exclusions={exclusions} setExclusions={setExclusions} editorType='Package' />
        <Testimonials testimonials={testimonials} setTestimonials={setTestimonials} editorType='Package' />
        <Document documents={documents} setDocuments={setDocuments} editorType='Package' />
        <Policy refund={form.refund} cancel={form.cancel} confirm={form.confirmation} payment={form.payment} editorType='Package' onChange={updateForm} />
        <CMSMediaSection image={form.image} alt={form.alt} onChange={updateForm} editorType="Package" />
        <ChildImagePicker childImage={childImage} setChildImage={setChildImage}/>
        <CMSActions actionType='create' editorType='Package' onPreview={handlePreview} onPublish={handlePublish} />
      </form>

    </div>

  );
}
