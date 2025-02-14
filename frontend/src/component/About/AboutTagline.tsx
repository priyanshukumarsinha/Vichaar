import { ReactNode } from "react"

const AboutTagline = ({children}:{children:ReactNode}) => {
  return (
    <p className="text-2xl  my-12 font-sans">
        <span className="bg-gray-200 py-1 leading-[40px]">
            {children}
        </span>
      </p>
  )
}

export default AboutTagline