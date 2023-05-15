import { Icons } from "./ui/icons"

const Footer = () => {
  return (
    <div className="mt-10 flex flex-col items-center space-y-5 border-t p-10 md:mt-20 md:flex-row md:space-y-0">
      <div className="flex flex-1 items-center ">
        <Icons.terminal className="mr-2" />
        <p>Made with &lt;3 by Mariano</p>
        <Icons.textCursor className="h-4  w-4 animate-cursor-blink" />
      </div>
      <div className="flex items-center space-x-5">
        <p className="font-bold">About</p>
        <p className="font-bold">Projects</p>
        <p className="font-bold">Contact</p>
      </div>
    </div>
  )
}

export default Footer
