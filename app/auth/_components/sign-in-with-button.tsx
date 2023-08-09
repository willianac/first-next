type ComponentProps = {
  children: React.ReactNode
  backgroundColor?: string
  bgColorHover?: string
  color?: string
  Icon: JSX.ElementType
}

export function SignInWithButton({ children, backgroundColor, bgColorHover, color, Icon }: ComponentProps) {
  return (
    <button
      className={`
      font-bold rounded-lg h-11 relative transition ${backgroundColor} ${color} 
      ${bgColorHover}`
      }
    >
      {children}
      <i className="absolute left-2 top-2 w-7">
        {<Icon />}
      </i>
    </button>
  )
}