const express= require('express')
const router = express.Router()
const Category=require('../models/Categories')


router.post('/addcategory',async(req,res,next)=>{

    try {
        const {name}= req.body
        const findcategory= await Category.findOne({
            name:name
        })
        if(!findcategory)
        {
            let category=new Category()
            category.name = name
    
            await category.save()
            return res.status(200).json({
                success:true,
                msg:"Category Added",
                category:category
            })
            
        }
        else
        {
            return res.status(400).json({
                success:false,
                msg:"category Already exixts",
                category:null
            })
    
        }  
    } catch (error) {
        console.log(error);
        
    }

   

})
module.exports = router




