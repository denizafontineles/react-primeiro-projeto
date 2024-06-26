function Flex() { //gerado através do rfce
    return (
        <div className="border-4 border-cyan-500 m-8 p-8 ">

            {/* <div>
                <h1>Stitch!</h1>
                <p>Ohana quer dizer família, família quer dizer nunca abandonar ou esquecer.</p>
            </div>

            <div className="w-[250px]">
                <br />
                <img src="https://i.etsystatic.com/40283811/r/il/2eb1f4/4557631095/il_570xN.4557631095_qitc.jpg" alt="Stitch" />
            </div> */}

            <h3 className='text-xl'>justify-content alinhamento horizontal</h3>
            <h5>justify-start Esquerda</h5>
            <div className="flex flex-row justify-start m-3">
                <div className='basis-1/4 bg-red-500'>01</div>
                <div className='basis-1/4 bg-gray-400'>01</div>
            </div>

            <h5>justify-end Direita</h5>
            <div className="flex flex-row  justify-end m-3">
                <div className='basis-1/4 bg-red-500'>01</div>
                <div className='basis-1/4 bg-gray-400'>01</div>
            </div>

            <h5>justify-center Centro</h5>
            <div className="flex flex-row  justify-center m-3">
                <div className='basis-1/4 bg-red-500'>01</div>
                <div className='basis-1/4 bg-gray-400'>01</div>
            </div>

            <h5>justify-around estremidades</h5>
            <div className="flex flex-row  justify-between m-3">
                <div className='basis-1/4 bg-red-500'>01</div>
                <div className='basis-1/4 bg-gray-400'>01</div>
            </div>

            <h5>justify-around estremidades com espaçamento</h5>
            <div className="flex flex-row  justify-around m-3">
                <div className='basis-1/4 bg-red-500'>01</div>
                <div className='basis-1/4 bg-gray-400'>01</div>
            </div>

            <div className='mt-12'>
                <h3 className='text-xl'>justify-content alinhamento vertical</h3>
                <div className='w-auto h-60 bg-gray-400 flex  justify-center items-start m-3'>
                    <div className='basis-1/4 bg-red-500'>justify-center items-start alinhamento horizontal centro/vertical topo</div>
                </div>
                <div className='w-auto h-60 bg-gray-400 flex  justify-center items-center m-3'>
                    <div className='basis-1/4 bg-red-500'>justify-center items-start alinhamento horizontal centro/vertical centro</div>
                </div>
                <div className='w-auto h-60 bg-gray-400 flex  justify-center items-end m-3'>
                    <div className='basis-1/4 bg-red-500'>justify-center items-start alinhamento horizontal centro/vertical base</div>
                </div>
            </div>
            
        </div>

        
    )
}

export default Flex