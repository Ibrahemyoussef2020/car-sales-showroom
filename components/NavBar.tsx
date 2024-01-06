import Link from "next/link"
import Image from "next/image"
import { CostumButton } from "."

const NavBar = () => {
  return (
    <header className=" w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:p-16 p-6 py-4">
            <Link href='/' className="flex justify-center items-center">
                <Image src='/logo.svg' alt="Cars" 
                   width={118}
                   height={18}
                   className=" object-contain" 
                />
            </Link>
            <CostumButton 
                title="Log In"
                btnType='button'
                styles="text-primary-blue rounded-full bg-white min-w-[130px] cursor-not-allowed"
            />
        </nav>
    </header>
  )
}

export default NavBar