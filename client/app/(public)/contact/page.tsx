import ContactHero from "@/sections/contact/contact-hero"
import ContactInfo from "@/sections/contact/contact-info"
import ContactForm from "@/sections/contact/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pb-24">
      <ContactHero />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  )
}