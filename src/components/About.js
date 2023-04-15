import React from "react";

export default function About() {

  const downloadTxtFile = () => {
    fetch('./R.J.S. Balajee.pdf', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
    .then((response) => response.blob())
    .then((blob) => {
      // Create blob link to download
      const url = window.URL.createObjectURL(
        new Blob([blob]),
      );
      const link = document.createElement('a');
      link.href = url+Date.now();
      link.setAttribute(
        'download',
        `R.J.S. Balajee.pdf`,
      );
 
      // Append to html link element page
      document.body.appendChild(link);
  
      // Start download
      link.click();
  
      // Clean up and remove the link
      link.parentNode.removeChild(link);
    });
}
  return (
    <section id="about" >
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Balajee.
            <br className="hidden lg:inline-block" />Aspiring Data Engineer
          </h1>
          <p className="mb-8 leading-relaxed">
            
          </p>
          <div className="flex justify-center">
      
            <div className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
     <button id="downloadBtn" onClick={downloadTxtFile} value="download">My Resume</button>
</div>
            <a
              href="#contact"
              className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
             Contact Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./balajee.png"
          />
        </div>
      </div>
    </section>
  );
}