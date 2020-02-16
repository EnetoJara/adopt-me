import { PoolClient } from 'pg';

export class BaseController {

  private connection: PoolClient;
  public constructor() {
    this.beginTransaction = this.beginTransaction.bind(this);
    this.rollback = this.rollback.bind(this);
    this.commitTransaction = this.commitTransaction.bind(this);
  }


  protected beginTransaction () {
    return this.connection.query("BEGIN").catch(this.rollback);
  }

  protected rollback () {
      return this.connection.query("ROLLBACK")
      .then(()=>this.connection.release())
  }

  protected commitTransaction () {
    return this.connection.query("COMMIT")
    .then(()=>this.connection.release());
  }
}
