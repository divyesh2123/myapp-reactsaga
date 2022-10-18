import React from 'react'
import useFetch from './useFetch'

export default function HomeData() {
    const [data] =  useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
    {
        data.map((element)=> {

            return (<div>{element.title}</div>)
        })
    }

    </>
  )
}
