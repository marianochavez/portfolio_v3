import { send } from "@emailjs/browser"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, "Name is too short").max(50, "Name is too long"),
  email: z.string().email("Invalid email").min(1, "Required"),
  message: z
    .string()
    .min(2, "Message is too short")
    .max(500, "Message is too long"),
})

type FormSchemaType = z.infer<typeof formSchema>

export const useContactForm = () => {
  const { toast } = useToast()
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

  const onSubmit = async (form: FormSchemaType) => {
    try {
      await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      reset()
      toast({
        title: "Message sent",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 4000,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later",
        duration: 3000,
      })
    }
  }

  return {
    register,
    handleSubmitForm: handleSubmit(onSubmit),
    reset,
    errors,
    isSubmitting,
    isDirty,
    isValid,
  }
}
