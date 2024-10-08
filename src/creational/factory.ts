enum DatabaseType {
  POSTGRES = 'postgres',
  MONGO = 'mongo',
}

abstract class DatabaseInstance {
  constructor(
    public name: string,
    public dsn: string
  ) {}

  abstract connect(): void;
}

class PostgresInstance extends DatabaseInstance {
  public connect(): void {
    // connect with dsn
    console.log(`connected to ${this.name} database`);
  }
}

class MongoInstance extends DatabaseInstance {
  public connect(): void {
    // connect to dsn
    console.log(`connected to ${this.name} database`);
  }
}

class DatabaseInstanceFactory {
  public create(type: DatabaseType, dsn: string) {
    switch (type) {
      case DatabaseType.POSTGRES:
        return new PostgresInstance(type, dsn);
      case DatabaseType.MONGO:
        return new MongoInstance(type, dsn);
      default:
        return console.error('Database not specified');
    }
  }
}

const databaseInstanceFactory = new DatabaseInstanceFactory();

export default function factory(): void {
  const pg = databaseInstanceFactory.create(
    DatabaseType.POSTGRES,
    'postgresql://localhost:5432'
  );

  const mongo = databaseInstanceFactory.create(
    DatabaseType.MONGO,
    'mongo://localhost:27017'
  );

  console.log({pg, mongo});
}
