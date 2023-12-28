const db = require("../config/config.js");

const update = async (req, res) => {
  try {
      const q =
      "UPDATE `user master` SET `name`= ?, `email`= ?, `gender`= ?, `status`= ? WHERE id = ?";
    const id = req.body.id;

    const values = [
      req.body.name,
      req.body.email,
      req.body.gender,
      req.body.status,
    ];

    console.log(values);
    await db.db.query(q, [...values, id], (err, data) => {
      if (err) {
        throw err;
      }
      res
        .status(202)
        .json({
          data: { ...values, id },
          mesasge: "User updated successfully!!",
        });
    });
  } catch (err) {
    res.status(505).json({ mesasge: err });
  }
};

const get = async (req, res) => {
    try {
       
      const q = "SELECT * FROM `user master` ORDER BY createdAt ASC";
    await db.db.query(q, (err, r) => {
        if(err)throw err;
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const st = (page-1)*limit;
        const en = page*limit;
        const total = Math.ceil(r.length/limit);
        // const data = 
        const data = r.slice(st, en);
        let result = {};
        if(en < r.length)
        result.next = {
            page:page+1,
            limit:limit
        }
        if(st>0 )
       { result.previous = {
            page:page>1?page-1:undefined,
            limit:limit
        }}
        // console.log(result);
      res.status(202).json({result, data,  total});
    });
  } catch (err) {
    res.send(err);
  }
};

const getAll = async (req, res) => {
    try {
       
      const q = "SELECT * FROM `user master` ORDER BY createdAt ASC";
    await db.db.query(q, (err, r) => {
        if(err)throw err;
        
      res.status(202).json(r);
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = { update, get, getAll };
