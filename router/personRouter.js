// const express = require('express')
const router = require('express').Router();
const Person = require('../models/person');

router.post('/', async (req, res) => {
    try{
    const data = req.body // Assuming the request body contains the person data
  
    // Create a new person document using the mongoose model
    const newPerson = new Person(data);
  
    // save the new person to the database
    const response = await newPerson.save()
    console.log('data saved')
    res.status(200).json(response);
    }
    catch(err){
      console.log(err)
      res.status(500).json({error: 'Internal server Error'})
    }
  })
  
  // Get method to get the person
  router.get('/', async (req, res) => {
    try{
        const data = await Person.find();
        console.log('data fetched')
        res.status(200).json(data);
    }catch(err){
      console.log(err)
      res.status(500).json({error: 'Internal server Error'})
    }
  })

  // to get details of specific work
  router.get('/:workType', async (req, res) => {
    try{
        const workType = req.params.workType
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work: workType});
            console.log('response fetched')
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid work type'})
        }
    }catch(err){
      console.log(err)
      res.status(500).json({error: 'Internal server Error'})
    }
  })

// PUT for updation
router.put('/:id', async (req, res) =>{
  try{
    const personId = req.params.id // Extract the id from Url parameter
    const updatedPersonData = req.body; // Updated data for person

    const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
      new: true, // Return updated document
      runValidators: true // Run Mongoose validation
    })
    if(!response){
      return res.status(404).json({error: 'Person not found'})
    }
    console.log('data updated')
    res.status(200).json(response)
  }catch(err){
    console.log(err)
    res.status(500).json({error: 'Internal server error'})
  }
})

module.exports = router