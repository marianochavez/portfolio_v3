import ContactForm from "./contact-form"
import ContactSpin from "./contact-spin"

const ContactSection = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="py-10 font-headings text-4xl">Contact</h1>
      <div className="flex w-full flex-col items-center justify-evenly p-5 md:flex-row md:p-20">
        <ContactSpin />
        <div className="h-60 border border-white" />
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection
