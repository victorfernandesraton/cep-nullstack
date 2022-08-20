export default function FormView(props) {
    const { error = null, result = null, onCepChange = null, loading = false } = props
    return (
        <section class="overflow-hidden text-gray-700 items-center">
            <article>
                <div className="flex justify-center">
                    <div class="p-6 rounded-lg shadow-lg bg-white max-w-md">
                        <div class="form-group mb-6">
                            <form>
                                <label for="cep" class="form-label inline-block mb-2 text-gray-700">Insira seu CEP</label>
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
                            </form>
                        </div>
                        {loading && <div>Loading...</div>}
                        {result && !error && !loading && (
                            <div>
                                <p>Cidade: {result.city}</p>
                                <p>Estado: {result.state}</p>
                                <p>Rua: {result.street}</p>
                            </div>
                        )}
                        {error && !loading && <p style='color: red'>{error}</p>}
                    </div>
                </div>
            </article>
        </section>
    )
}