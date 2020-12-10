import React from 'react'
import { useParams } from 'react-router-dom'

export const Contact = () => {
  const { text } = useParams<{ text: string }>()

  return (
    <>
      <h1>Contact page</h1>
      {text}
    </>
  )
}
