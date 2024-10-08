enum CoverType {
  HARDCOVER = 'hardcover',
  PAPERBACK = 'paperback',
}

interface BookProperties {
  isbn: string;
  title: string;
  cover: CoverType;
}

abstract class Book {
  constructor(public properties: BookProperties) {}
  abstract clone(): Book;
}

class KidsBook extends Book {
  constructor(properties: BookProperties) {
    super(properties);
  }

  public clone(): Book {
    const clonedProperties: BookProperties = {
      isbn: this.properties.isbn,
      title: this.properties.title,
      cover: this.properties.cover,
    };

    return new KidsBook(clonedProperties);
  }
}

export default function prototype() {
  const kidsBookStandard: Book = new KidsBook({
    isbn: 'abc123123',
    title: 'Learning Math',
    cover: CoverType.PAPERBACK,
  });

  const kidsBookPremium: Book = kidsBookStandard.clone();
  kidsBookPremium.properties.cover = CoverType.HARDCOVER;

  console.log({kidsBookStandard, kidsBookPremium});
}
