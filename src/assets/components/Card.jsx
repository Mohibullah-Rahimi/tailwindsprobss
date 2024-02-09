import React from "react";

function Card ({ message="", name="No Name", position="hhh", text="Thank you", photo="no photo"}) {
//console.log(props);
    return( 

    <div>
     <h1>--------------------</h1>  
   <h1 className="text-3xl bg-green-500 p-3 rounded">
      {name} </h1>
 <figure className="bg-slate-100 rounded-xl p-8 bg-slate-500">
  <img className="w-24 h-24 rounded-full mx-auto" src={photo} alt="" width="600" />
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        {message}
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {text}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {position}
      </div>
    </figcaption>
  </div>
</figure>
   </div>
    )
}

export default Card;
