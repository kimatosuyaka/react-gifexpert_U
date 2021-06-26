


export const getGif =async (category) => {
    const api_key = 'KRd2DFMmJAq2pfDvOGO55aWUYQSbPQNL';
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${ encodeURI(category) }&limit=4`;

    const resp = await fetch( url ); //indico que se puede verificar con resp.ok?
    const {data} = await resp.json(); 

    const gifs = data.map( img => {
        return {
          id: img.id,
          title: img.title,
          url:img.images?.downsized_medium.url // ? si viene las imagenes que la utilise
        }
    })

   return gifs;
    
} 