const data = require("../data/magic");

const idCheck = (req, res, next) => {};

// MIDDLEWARE PATTERN

// function FUNCTIONAME (req, res, next){
// if(condition){
// res}
// next()
// }

// testRouter.put('/:id', idChecker, (req, res)=>{
//     let id = Number(req.params.id)
//     let new_test = req.body

//     data[id] = new_test

//     res.status(202).json({message: data[id]})

// })

// PATTERN;

// router.action("/endpoint", middleware, (homies) => {
//   logic;
// });
