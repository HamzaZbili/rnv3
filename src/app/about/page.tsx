import React from 'react'
import rachel from "@/app/about/images/rachel.jpeg"


const page = () => {
  return (
    <section className="flex flex-col items-center px-10 sm:px-20 pt-5">
      <img src={rachel.src} alt="rachel" className="mt-10" />
      <h4 className="font-bold my-10 text-xl text-center">
        Rachel Naismith is a Paris based food and travel writer.
      </h4>
      <p className="text-center py-10 border-t">
        Rachel Naismith is a former micro-bakery owner and manager of a
        Glasgow-based food bank. She currently lives in Paris where she writes
        about the city's shifting culinary landscape for publications including
        &nbsp;
        <span className="italic">
          Palate Magazine, Travel Mag, BBC Travel, and Gastro Obscura
        </span>
      </p>
    </section>
  );
}

export default page