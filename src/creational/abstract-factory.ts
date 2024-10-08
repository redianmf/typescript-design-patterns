interface Connection {
  connect(): void;
  disconnect(): void;
}

interface Query {
  execute(): void;
}

interface DBFactory {
  createConnection(): Connection;
  createQuery(connection: Connection): Query;
}

class MySQLConnection implements Connection {
  connect(): void {
    console.log('connected to MySQL');
  }
  disconnect(): void {
    console.log('disconnected from MySQL');
  }
}

class PostgreSQLConnection implements Connection {
  connect(): void {
    console.log('connected to PostgreSQL');
  }
  disconnect(): void {
    console.log('disconnected from PostgreSQL');
  }
}

class MySQLQuery implements Query {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  execute(): void {
    this.connection.connect();
    console.log('executing MySQL query...');
    this.connection.disconnect();
  }
}

class PostgreSQLQuery implements Query {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  execute(): void {
    this.connection.connect();
    console.log('executing PostgreSQL query...');
    this.connection.disconnect();
  }
}

class MySQLFactory implements DBFactory {
  createConnection(): Connection {
    return new MySQLConnection();
  }
  createQuery(connection: Connection): Query {
    return new MySQLQuery(connection);
  }
}

class PostgreSQLFactory implements DBFactory {
  createConnection(): Connection {
    return new PostgreSQLConnection();
  }
  createQuery(connection: Connection): Query {
    return new PostgreSQLQuery(connection);
  }
}

function createDB(factory: DBFactory) {
  const connection = factory.createConnection();
  const query = factory.createQuery(connection);

  query.execute();
}

export default function abstractFactory() {
  createDB(new MySQLFactory());
  createDB(new PostgreSQLFactory());
}
