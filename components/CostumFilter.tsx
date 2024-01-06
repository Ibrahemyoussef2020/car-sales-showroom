"use client"

import { useState , Fragment } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Listbox , Transition } from "@headlessui/react"
import { CostumFilterProps } from "@/types"
import { updateSearchParams } from "@/utils"



const CostumFilter = ({title,options}:CostumFilterProps) => {
  const [selected, setSelected] = useState(options[0])

  const router = useRouter()

  const handleUpdateParam = (e:{title:string,value:string})=>{
 
    const newPathName = updateSearchParams(title,e.value.toLowerCase())

    router.push(newPathName)

  }

  return (
    <div className="w-fit mb-2">
      <Listbox
        value={selected}
        onChange={
          e=>{
            setSelected(e)
            handleUpdateParam(e)
          }
        }
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className='custom-filter__btn'>
            <span className=" block truncate">{selected.title}</span>
            <Image
              src='/chevron-up-down.svg'
              height={20}
              width={20}
              className='ml-4 object-contain'
              alt='chevron_up-down'
            />
          </Listbox.Button>
          <Transition
            leave=" trasation ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className='custom-filter__options'>
              {options.map(option=>{
                return <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({active})=> `relative cursor-default select-none py-2 px-4 ${ active ? ' bg-primary-blue-100 text-white' : ' text-gray-900'}`}
                >
                  {({selected})=> (
                    <span className={` block truncate ${selected ? 'font-medium' : ' font-normal'}`}>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CostumFilter