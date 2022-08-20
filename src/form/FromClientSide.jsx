import Nullstack from "nullstack";
import { cep } from "cep-any";
import FormView from "./FormView";

export default class Form extends Nullstack {
    result = null
    error = null
    loading = false

    prepare({ page }) {
        page.title = 'CEP - Cleint Side'
    }

    async fetchCepData({ value }) {
        if (this.loading) return;
        try {
            this.loading = true;
            const data = await cep(value)
            this.result = data
            this.error = null
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