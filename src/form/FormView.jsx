export default function FormView(props) {
    const { error = null, result = null, onCepChange = null, loading = false } = props
    return (
        <div>
            <form>
                <input type="text" name="cep" oninput={({ event }) => {
                    onCepChange({ value: event.target.value })
                }} />
                {loading && <div>Loading...</div>}
                {result && !error && !loading && (
                    <div>
                        <p>Cidade: {result.city}</p>
                        <p>Estado: {result.state}</p>
                        <p>Rua: {result.street}</p>
                    </div>
                )}
                {error && !loading && <p style='color: red'>{error}</p>}
            </form>
        </div>
    )
}