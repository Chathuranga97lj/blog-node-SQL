import db from "../config/db.js";

class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
  // save data fro db function
  save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1; // month is 0 index array type(0 = january, 11= December)
    let dd = d.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;

    // inside the sql quary use '' for add values
    let sql = `
            INSERT INTO posts(
                title, 
                body,
                created_at
            )
            VALUES(
                '${this.title}',
                '${this.body}',
                '${createdAtDate}'
            )
        `;
    // newPost is array of data, cover it [] for destructures
    return db.execute(sql);
  }

  static finadAll() {
    let sql = "SELECT * FROM posts;";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM posts WHERE id = ${id};`;

    return db.execute(sql);
  }
}

export default Post;
