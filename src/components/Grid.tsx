
function Grid() {
  return (
    <div >
      {/* <div className="grid grid-cols-12">
        <div className="bg-red-300 col-span-4">
          Container 01
        </div>

        <div className="bg-blue-300 col-span-4">
          Container 02
        </div>

        <div className="bg-yellow-300 col-span-4">
          Container 03
        </div>
      </div> */}

      {/* --------------------------------------------------------- */}

      <div className='grid grid-cols-12 gap-2 m-4'>
        <div className='col-span-6 bg-green-300'>
          container 1
        </div>

        <div className='col-span-6 bg-yellow-200'>
          container 2
        </div>
      </div>

      <div className='grid grid-cols-12 gap-2 m-4'>

        <div className='col-span-8 bg-green-300'>
          container 1
        </div>

        <div className='col-span-4 bg-yellow-200'>
          container 2
        </div>

      </div>

      <div className='grid grid-cols-12 gap-2 m-4'>

        <div className='col-span-4 bg-green-300'>
          container 1
        </div>

        <div className='col-span-4 bg-yellow-200'>
          container 2
        </div>

        <div className='col-span-4 bg-red-500'>
          container 3
        </div>

      </div>

      <div className='grid grid-cols-12 gap-2 m-4'>

        <div className='col-span-3 bg-green-300'>
          container 1
        </div>

        <div className='col-span-3 bg-yellow-200'>
          container 2
        </div>

        <div className='col-span-3 bg-red-500'>
          container 3
        </div>

        <div className='col-span-3 bg-blue-500'>
          container 4
        </div>

      </div>

      <div className='grid grid-cols-12 gap-2 m-4'>

        <div className='col-span-4 bg-green-300'>
          container 1
        </div>

        <div className='col-span-4 bg-yellow-200'>
          container 2
        </div>

        <div className='col-span-2 bg-red-500'>
          container 3
        </div>

        <div className='col-span-2 bg-blue-500'>
          container 4
        </div>

      </div>

    </div>
  )
}

export default Grid