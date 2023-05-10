type TextRevealProps = { text: string; delay?: number }

const TextReveal = ({ text, delay = 50 }: TextRevealProps) => {
  return (
    <div className="flex overflow-hidden font-headings">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={
            "animate-in slide-in-from-bottom duration-500 fill-mode-backwards "
          }
          style={{
            animationDelay: `${index * delay}ms`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  )
}

export default TextReveal
