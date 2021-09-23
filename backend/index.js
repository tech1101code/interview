const express = require('express')
const cors = require('cors');
const { default: axios } = require('axios');
const app = express()

app.use(cors())
app.use(express.json())

let cache = null
app.get('/', async (req, res) => {
	try{
		if(cache){
			console.log("serving from cache");
			res.send({success: 1 , data:cache});
		}
		else{
			const apidata = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=40315881b5af1985a7ceba1f41b45973&language=en-US")
			cache = {...apidata.data}
			if(apidata.status == 200){
				res.send({success: 1 , data:apidata.data});
			}
			else{
				res.send({success: 0 , error : 'server error, response code is not 200'});
			}
		}
		
	
	}
	catch(err){
		console.log(err);
		res.send({success: 0 , error : err});
	}
  
})

const port = 8000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})