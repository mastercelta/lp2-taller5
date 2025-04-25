class Options {
    constructor (token) {
        this.token = token;
        this.headers = {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json",
        };

    }
}
export default Options;
