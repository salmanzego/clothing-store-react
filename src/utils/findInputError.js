export const findInputError = (err, name) => {
    if (err) {
        if (err[name]) {
            return { error: err[name] };
        } else {
            return {};
        }
    }
}