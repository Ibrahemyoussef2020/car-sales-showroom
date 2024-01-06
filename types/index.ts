import { MouseEventHandler } from "react";

export interface CostumButtonProps {
    title:string;
    styles?:string;
    textStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?:'button' | 'submit';
    rightIcon?:string;
    isDisabled?:boolean
}

export interface SearchManufacturerProps {
    manufacturer:string;
    setManufacturer:(manufacturer:string)=> void;
}

export interface CarProps {
    city_mpg:number;
    class?:string;
    combination_mpg:number;
    cylinders:number;
    displacement: number;
    drive:string;
    fuel_type: string;
    highway_mpg:string;
    make:string;
    model:string;
    year:number,
    transmission:string,
    images?:string
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}
  
  export interface HomeProps {
    searchParams: FilterProps;
}

export interface CostumFilterOptionsProps {
    title:string;
    value:string
}

export interface CostumFilterProps {
    title:string;
    options:CostumFilterOptionsProps[]
}

export interface ShowMoreProps {
    pageNumber:number;
    isNext:boolean
}