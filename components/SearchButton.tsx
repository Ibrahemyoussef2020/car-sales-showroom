import Image from "next/image"

const SearchButton = ({otherClasses}:{otherClasses:string}) => {
  return (
    <button type="submit" className={`-m-3 z-10 block ${otherClasses}`}>
        <Image
            src={"/magnifying-glass.svg"}
            alt={"magnifying glass"}
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
  )
}

export default SearchButton