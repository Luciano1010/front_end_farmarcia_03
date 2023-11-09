import ListaCategorias from "../../components/categorias/listaCategorias/ListaCategorias";


function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo A Farmacia Bem Estar!
                        </h2>
                        <p className='text-xl'>
                            
                        </p>

                        <div className="flex justify-around gap-4">
                            
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://th.bing.com/th/id/OIG.5oHQD66T.kbLZNrQPTT.?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"
                            alt="Imagem Página Home"
                            className='w-2/3 rounded-full'
                        />
                    </div>
                </div>
            </div>

            <ListaCategorias />
        </>
    )
}

export default Home;

