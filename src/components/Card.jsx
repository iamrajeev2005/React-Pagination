import React from 'react'

function Card({data}) {
  console.log(data)
    return (
      <div className="h-[50vh] w-[20vw] bg-blue-300 rounded-lg overflow-hidden flex flex-col gap-4">
          <img className="h-[25vh] w-full object-cover" src={data.thumbnail} alt="" />
        <h1 className="text-2xl font-bold text-center">{data.title}</h1>
        <p className="text-center">{data.description}</p>
      </div>
    );
}

export default Card