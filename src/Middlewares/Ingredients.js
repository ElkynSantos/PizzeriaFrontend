
import axios from 'axios'

const getvalues = async (request,response) =>{

    try{
      let allvalues = await axios.get("localhost:3000/api/")

      return allvalues
      
    }catch (e){
        response.status(500).json({status:500,message: e.error})
    }
    
}