export class Referer {

    public name: string;
    public url: string;
    public description: string;
    public sex: string;

    constructor(data) { Object.assign(this, data); }
}