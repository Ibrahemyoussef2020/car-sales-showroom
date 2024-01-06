"use client";

import { CostumButtonProps } from "@/types";
import { updateSearchParams } from "@/utils";
import Image from "next/image";

const CostumButton = ({title,styles,textStyles,handleClick,btnType,rightIcon,isDisabled}:CostumButtonProps) => {
  
  return (
    <button
    disabled={false}
    type={btnType || 'button'}
    className={`custom-btn ${styles}`}
    onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {
          rightIcon ? <div className=" relative w-6 h-6 ">
            <Image 
              src={rightIcon}
              alt="right icon"
              fill
              className="object-contain"
            />
          </div> : null
        }
    </button>
  )
}

export default CostumButton