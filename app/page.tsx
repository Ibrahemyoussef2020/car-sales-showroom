import { CarCard, CostumFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, manufacturers ,yearsOfProduction } from "@/constants";
import { CarProps, HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import { randomUUID } from "crypto";


export default async function Home({searchParams}:HomeProps) {
  
  let allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });


 allCars = allCars.map((car:CarProps) => {
    const targeManufacturers =  manufacturers.find(manufacturer => car.make.toLowerCase() === manufacturer[0].toLowerCase())
     return targeManufacturers ? {...car,image:`/cars/${targeManufacturers[1]}.webp`} : {...car,image:'/hero.png'}
  }) 



  const isDataEmpty = !allCars || !Array.isArray(allCars) || !allCars.length 

  
  return (
    <main className=" overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y" id="discover">
        <div className="home__text-container">
          <h1 className=" text-4xl font-extrabold ">
            Car Catalogue
          </h1>
          <p>
            Explore the cars you might like
          </p>
        </div>
        
        <div className="home__filters">
          <SearchBar />        
          <div className="home__filter-container">
            <CostumFilter title='fuel' options={fuels}/>
            <CostumFilter title='year' options={yearsOfProduction}/>
          </div>
        </div>

        {
          isDataEmpty ? <div className="home__error-container">
            <h2 className=" text-xl font-bold">Oops, Sory No result!</h2>
            <p>{allCars?.message}</p>
          </div>
          :
          <section>
            <div className="home__cars-wrapper">
            {allCars.map((car:CarProps) => <CarCard key={randomUUID()} car={car}/>)}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={searchParams.limit || 10 > allCars.length}
            />
          </section>
        }
      </div>
    </main>
  )
}
