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