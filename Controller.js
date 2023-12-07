const FormSchema = require('./FormSchema')

const SendFormData = async (req,res)=>{
    try{
        const {name,email,message} = req.body;
        console.log(name,email,message)
        const data = await FormSchema.create({name:name,email:email,message:message})
        res.status(200).json({
            success:true,
            message:"Form Data Sent Successfully",
            data:data
        })
    }
    catch(err){
        console.log(err)
    }
}
module.exports = SendFormData