import axios from 'axios'
import { QueryClient, useQuery } from 'react-query'


const queryClient = new QueryClient()

const MydataComponent = () => {

    const Api_key = "275d58779ccf4e22af03e792e8819fff"

    const fetchRandomRecipe =  async() =>{

        try{

            const response = await axios.get("https://api.spoonacular.com/recipes/random?number=10&apiKey="+{Api_key})

            return response.data.recipes
        }
        catch(error){

            throw new Error("Erreur lors de la recuperation des données"+error);
        }

        
        
    }

    const {data, isLoading, isError, refetch} = useQuery("RandomRecipe", fetchRandomRecipe,{
        enabled: true,
        refetchOnMount: false,
        refetchInterval: 1000,
        onSuccess: (data)=>{

            console.log(data);
            queryClient.setQueryData(data);
        },
        onError: (error) =>{
            console.log(error);
        }
    });



  return {data, isLoading, isError, refetch}
}

export default MydataComponent
