/**
 * Created by dinesh3836 on 14-09-2016.
 */


function sayHello(req, res) {
  if (!req.query.name) {
    res.status(200).send({message: "Hello Someone"});
  } else {
    res.status(200).send({message: "Hello " + req.query.name});
  }
}

module.exports = {
  sayHello: sayHello
};
