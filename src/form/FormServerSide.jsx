import Nullstack from "nullstack";
import { cep } from "cep-any";
import FormView from "./FormView";

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




    render() {
        return (
            <FormView error={this.error} result={this.result} onCepChange={this.fetchCepData} />
        )
    }
}