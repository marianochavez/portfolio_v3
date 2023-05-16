"use client"

import { ComponentProps } from "react"

import { cn } from "@/lib/utils"
import { useContactForm } from "@/hooks/use-contact-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import styles from "./contact.module.css"

type ContactFormProps = {
  className?: ComponentProps<"div">["className"]
}

const ContactForm = ({ className }: ContactFormProps) => {
  const { register, handleSubmitForm, isDirty, isValid, isSubmitting, errors } =
    useContactForm()

  return (
    <div className={cn("flex w-full items-center justify-center", className)}>
      <form
        onSubmit={handleSubmitForm}
        className="w-full max-w-xs space-y-2 md:max-w-lg"
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
          className={errors.email && styles.inputError}
        />
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Message"
          className={errors.message && styles.textAreaError}
        />
        <Button
          type="submit"
          disabled={!isDirty || !isValid || isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
