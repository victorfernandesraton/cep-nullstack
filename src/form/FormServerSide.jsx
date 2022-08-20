import Nullstack from "nullstack";
import { cep } from "cep-any";

export default class FormServerSide extends Nullstack {
    result = null
    error = null
    static async getCep({ value }) {
        const data = await cep(value)
        return data
    }

    async fetchCepData({ value }) {
        try {
            const data = await this.getCep({ value })
            this.result = data
        } catch (error) {
            this.error = error
            this.result = null
        }
    }


    onChange({ event }) {
        this.fetchCepData({ value: event.target.value })
    }

    renderResult() {
        if (this.error || !this.result) {
            return <></>
        }
        if (this.result) {
            return (
                <div>
                    <p>Cidade: {this.result.city}</p>
                    <p>Estado: {this.result.state}</p>
                    <p>Rua: {this.result.street}</p>
                </div>
            )
        }
    }

    render() {
        return (
            <form>
                <input type="text" name="cep" oninput={this.onChange} />
                <Result />
                {this.error && <p style='color: red'>{this.error}</p>}
            </form>
        )
    }

}