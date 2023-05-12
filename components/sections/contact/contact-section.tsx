import ContactForm from "./contact-form"
import ContactSpin from "./contact-spin"

const ContactSection = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="py-5 font-headings text-4xl md:py-10">Contact</h1>
      <div className="flex w-full flex-col items-center justify-center space-y-14 px-5 md:flex-row md:space-x-10 md:p-20">
        <ContactSpin className="order-3 mt-10 flex-1 md:order-1 md:mt-0" />
        <div className="order-2 hidden h-60 border border-white md:block" />
        <ContactForm className="order-1 flex-1 md:order-3" />
      </div>
    </section>
  )
}

export default ContactSection
