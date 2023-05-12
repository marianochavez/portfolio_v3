"use client"

import { ComponentProps } from "react"

import { cn } from "@/lib/utils"
import { useContactForm } from "@/hooks/use-contact-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import styles from "./contact.module.css"

type ContactFormProps = {
  className?: ComponentProps<"form">["className"]
}

const ContactForm = ({ className }: ContactFormProps) => {
  const { register, handleSubmitForm, isDirty, isValid, isSubmitting, errors } =
    useContactForm()

  return (
    <form
      onSubmit={handleSubmitForm}
      className={cn(
        "flex w-[70%] flex-col items-center justify-center space-y-2 md:w-full",
        className
      )}
    >
      <Input
        id="name"
        {...register("name")}
        placeholder="Name"
        className={errors.name && styles.inputError}
      />
      <Input
        id="email"
        {...register("email")}
        placeholder="Email"
        className={cn(errors.email && styles.inputError)}
      />
      <Textarea
        id="message"
        {...register("message")}
        placeholder="Message"
        className={cn(errors.message && styles.textAreaError)}
      />
      <Button
        type="submit"
        disabled={!isDirty || !isValid || isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
    </form>
  )
}

export default ContactForm
