import Nullstack from "nullstack";
import { cep } from "cep-any";
import FormView from "./FormView";

export default class FormServerSide extends Nullstack {
    result = null
    error = null
    loading = false
    static async getCep({ value }) {
        const data = await cep(value)
        return data
    }

    async fetchCepData({ value }) {
        if (this.loading) return;
        try {
            this.loading = true;
            const data = await this.getCep({ value })
            this.result = data
            return
        } catch (error) {
            this.error = error
            this.result = null
        } finally {
            this.loading = false
        }
    }


    render() {
        return (
            <FormView error={this.error} result={this.result} onCepChange={this.fetchCepData} loading={this.loading} />
        )
    }
}