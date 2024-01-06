import Image from "next/image"

import { footerLinks } from "@/constants"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className=" flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className=" flex flex-col justify-start items-start gap-6">
          <Image 
            src='/logo.svg' 
            alt='carHub'
            width={118}
            height={18}
            className="object-contain"  
          />
          <p className=" text-base text-gray-700 ">
            CarHub 2023 <br/>
            All right reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map(link => (
            <div key={link.title} className=" footer__link">
              <h3 className=" font-bold">{link.title}</h3>
              <ul>
                {link.links.map(linkItem => (
                  <li key={linkItem.title}>
                    <Link href={linkItem.url} className=" text-gray-500">
                      {linkItem.title}
                    </Link>
                  </li>
                ))}
              </ul>  
            </div>
          ))}
        </div>

        <div className=" w-full flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
          <p className="">
            @2023 carHub. All Rights Reserved          
          </p>
          <div className="footer__copyrights-link">
            <Link href='/' className=" text-gray-500">
              Privacy polisy
            </Link>
            <Link href='/' className=" text-gray-500">
              Terms of use
            </Link>
          </div>            
        </div>

      </div>
    </footer>
  )
}

export default Footer