import React from 'react'
import { useGlobalContext } from '../context'

function Pagination() {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();
  return (
    <div>
      <button
        onClick={
          () => getPrevPage()
        }
        className="btn">PREV</button>
      <span>
        {page + 1}
        /
        {nbPages}
      </span>
      <button
        onClick={
          () => getNextPage()
        }
        className="btn">NEXT</button>
    </div>
  )
}

export default Pagination
