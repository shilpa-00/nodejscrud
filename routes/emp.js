const express = require('express')
const router = express.Router()
const Emp = require('../models/emp')

router.get('/', async (req, res) => {
    try {
        const emps = await Emp.find()
        res.json(emps)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const emp = await Emp.findById(req.params.id)
        res.json(emp)
    } catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    const emp = new Emp({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        const result = await emp.save()
        res.json(result)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        // const emp = await Emp.findById(req.params.id)
        // emp.sub = req.body.sub
        // const result = await emp.save()
        // res.json(result)
        const result=await Emp.findByIdAndUpdate(req.params.id,req.body)
        res.json(result);
    } catch (err) {
        res.send('Error')
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        // const result=await Emp.deleteOne({_id:req.params.id})
        // // console.log(result.deletedCount)
        // res.json(result)
        const result=await Emp.findOneAndDelete(req.params.id);
        res.json(result);
    }catch(err){
        res.send(err);
    }
})

module.exports = router