"use client"

import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"

import { updateSearchParams } from "@/utils"
import { CostumButton } from "./"

const ShowMore = ({pageNumber,isNext}:ShowMoreProps) => {
    const router = useRouter()
    const handleNavigation = ()=>{
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParams('limit',`${newLimit}`)
        router.push(newPathName)
    }

  return (
    <div className=" w-full flex-center gap-5 mt-10">  
        <CostumButton
        btnType="button"
        title="Show More"
        styles="bg-primary-blue rounded-full text-white"
        handleClick={handleNavigation}
      />    
    </div>
  )
}

export default ShowMore