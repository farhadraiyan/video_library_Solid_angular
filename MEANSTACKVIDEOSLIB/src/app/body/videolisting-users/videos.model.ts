export class Videos{

    public title: string;
    public runtime: string;
    public genre: string;
    public rating: string;
    public director: string;
    public status: string;
    public imgPath:string;
    constructor(ttle:string, run:string, gen:string, ra:string, dir:string, stat:string, ipath:string)
    {
        this.title=ttle;
        this.runtime=run;
        this.genre=gen;
        this.director=dir;
        this.status=stat;
        this.rating=ra;
        this.imgPath=ipath;

    }




    
}