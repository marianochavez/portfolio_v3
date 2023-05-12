"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, useForm } from "react-hook-form"
import { z } from "zod"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().min(2, "Name is too short").max(50, "Name is too long"),
  email: z.string().email("Invalid email").min(1, "Required"),
  message: z
    .string()
    .min(2, "Message is too short")
    .max(500, "Message is too long"),
})

type FormSchemaType = z.infer<typeof formSchema>

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = (data: FormSchemaType) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center space-y-2"
    >
      <Input id="name" {...register("name")} placeholder="Name" />
      <Input id="email" {...register("email")} placeholder="Email" />
      <Textarea id="message" {...register("message")} placeholder="Message" />
      <Button type="submit" disabled={!isDirty || !isValid || isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
    </form>
  )
}

export default ContactForm
