

export class Book{
    id: string = '';
    title: string = '';
    authorName:string = '';
    authorLastName:string = '';
    nameOfPublisher:string = '';
    yearOfPublication:Date=new Date();
    dateOfIssue:string = '';
    image:string = '';


constructor(initializer?: any){
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.title) this.title = initializer.title;
    if (initializer.authorName) this.authorName = initializer.authorName;
    if (initializer.authorLastName) this.authorLastName = initializer.authorLastName;
    if (initializer.nameOfPublisher) this.nameOfPublisher = initializer.nameOfPublisher;
    if (initializer.yearOfPublication) this.yearOfPublication = initializer.yearOfPublication;
    if (initializer.dateOfIssue) this.dateOfIssue = initializer.dateOfIssue;
    if (initializer.image) this.image = initializer.image;
}
}