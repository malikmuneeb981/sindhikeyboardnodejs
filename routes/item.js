const express= require('express')
const router = express.Router()
const Item=require('../models/Items')
const Category=require('../models/Categories')
const { it } = require('node:test')

router.post('/additem',async(req,res,next)=>{

    try {
        const {text,endtext,categoryname}= req.body
    const findcat=await Category.findOne({
        name:categoryname
    })
    if(!findcat)
    {
       return res.status(400).json({
            success:false,
            message:"Category not found",
            item:null
        })
    }
    else
    {
        const finditem = await Item.findOne({
            text:text
        })
        if(!finditem)
        {
        let item=new Item()
        item.text=text
        item.endtext=endtext
        item.categoryname=categoryname
        await item.save()
        return res.status(200).json({
            success:true,
            message:"Item Added",
            item:item
        })
        }
        else
        {
            return res.status(400).json({
                success:false,
                message:"Item Already exists found",
                item:null
            })
        }

    }
    } catch (error) {
        console.log(error);
    }
    

})
router.post('/getitems',async(req,res,next)=>{

    try {
        const {categoryname} = req.body
        const finditems=await Item.find({
          categoryname:categoryname
        })
        if(!finditems)
        {
          return res.status(400).json({
              success:false,
              msg:"items not found",
              items:null
          })
        }
        else
        {
          return res.status(200).json({
              success:true,
              msg:"Items Found",
              items:finditems
          })
        }
    } catch (error) {
        console.log(error);
    }
     
})
module.exports=router