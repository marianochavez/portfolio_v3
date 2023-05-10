import Image from "next/image"
import galaxy from "@/public/images/galaxy.webp"

const GradientImage = () => {
  return (
    <div className="h-[24rem] w-[24rem] overflow-hidden rounded-bl-[12rem]  rounded-tr-[12rem]">
      <div className="scale-150">
        <Image
          alt="Mariano Chavez"
          src={galaxy}
          height={512}
          width={512}
          priority
          className="animate-spin"
          style={{
            animationDuration: "30s",
          }}
        />
      </div>
    </div>
  )
}

export default GradientImage
