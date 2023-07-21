import { promisePool } from '../databases/db.js';

const credentialModel = {
  async createcredential({ email, hashed_password }) {
    const query = `
        INSERT INTO credential (user, password)
        VALUES (?, ?)
      `;
    const [result] = await promisePool.execute(query, [email, hashed_password]);
    return result.insertId;
  },
};

export { credentialModel };
