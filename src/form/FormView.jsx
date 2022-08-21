export default function FormView(props) {
    const { error = null, result = null, onCepChange = null, loading = false } = props
    return (
        <section class="flex justify-between flex-col lg:flex-row mx-20 mt-4">
            <article class="overflow-hidden text-gray-700 items-center rounded-lg shadow-lg bg-white flex justify-center lg:mb-0 mb-8">
                <div class="p-6 max-w-lg">
                    <div class="form-group mb-6 p-2">
                        <form onsubmit={onCepChange}>
                            <label for="cep" class="form-label inline-block mb-2 text-gray-700">Insira seu CEP</label>
                            <div class="flex flex-row">
                                <input
                                    class="form-control
                                    block
                                    w-full
                                    px-2
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="cep"
                                    aria-describedby="cep" placeholder="Insira seu CEP"

                                    type="text" name="cep" oninput={({ event }) => {
                                        onCepChange({ value: event.target.value })
                                    }} />
                            </div>
                        </form>
                    </div>
                </div>
            </article>
            <aside class="flex w-full lg:w-8/12 400 ext-gray-700 items-center rounded-lg shadow-lg bg-white flex justify-start px-2">
                <div class="p-6">
                    {loading && <p>Loading...</p>}
                    {result && !error && !loading && (
                        <>
                            <p>Cidade: {result.city}</p>
                            <p>Estado: {result.state}</p>
                            <p>Rua: {result.street}</p>
                        </>
                    )}
                    {error && !loading && <p style='color: red'>{error}</p>}
                </div>
            </aside>
        </section>
    )
}