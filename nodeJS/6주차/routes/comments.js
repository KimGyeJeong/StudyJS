const express = require('express');
const Comment = require('../schemas/Comment');

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const comment = await Comment.create({
            commenter : req.body.id,
            comment : req.body.comment,
        });
        console.log(comment);
        const result = await Comment.populate(comment,  {path : 'commenter'});
    }catch (err){
        console.error(err);
        next(err);
    }
});

router.route('/:id')
    .patch(async (req, res, next) => {
        try{
            const result = await Comment.update({
                _id : req.params.id,
            }, {
                comment : req.body.comment,
            });
            console.log(result);
            res.json(result);
        }catch (err){
            console.error(err);
            next(err);
        }
    })
    .delete(async (req, res, next) => {
        try{
            const result = await Comment.remove({_id : req.params.id});
            console.log(result);
            res.json(result);
        }catch (err){
            console.error(err);
            next(err);
        }
    });

module.exports = router;