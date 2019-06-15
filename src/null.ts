import AnySchema from "./any";

export default class NullSchema extends AnySchema {
    public toSchema(id?: string) {
        const schema = super.toSchema(id);

        return {
            ...schema,
            type: "null",
        };
    }
}
