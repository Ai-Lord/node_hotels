// const express = require('express')
const router = require('express').Router()
const Menu = require('../models/menuItem')

router.post('/', async (req, res) => {
    try{
    const data1 = req.body // Assuming the request body contains the person data
  
    // Create a new person document using the mongoose model
    const newMenuItem = new Menu(data1);
  
    // save the new person to the database
    const response1 = await newMenuItem.save()
    console.log('data saved')
    res.status(200).json(response1);
    }
    catch(err){
      console.log(err)
      res.status(500).json({error: 'Internal server Error'})
    }
  })

 // Get method to get the menu
 router.get('/', async (req, res) => {
    try{
        const data1 = await Menu.find();
        console.log('data fetched')
        res.status(200).json(data1);
    }catch(err){
      console.log(err)
      res.status(500).json({error: 'Internal server Error'})
    }
  })

// DELETE used to delete the document
router.delete('/:id', async (req, res) =>{
    try{
      const menuId = req.params.id // Extract the id from Url parameter 

      const response = await Menu.findByIdAndDelete(menuId)
      if(!response){
        return res.status(404).json({error: 'Menu not found'})
      }
      console.log('data deleted')
      res.status(200).json({message: 'Menu deleted successfully'})
    }catch(err){
      console.log(err)
      res.status(500).json({error: 'Internal server error'})
    }
})

module.exports = router
