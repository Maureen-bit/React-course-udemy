
    export const getGifs = async (category ) => {
        const apiKey= "34LBg1078qVbBBhx71QdZWpOzFcYUp54";
        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${apiKey}`;
        const response = await fetch(url);
        const { data } = await response.json();
        const gifImages = data.map( image => {
            return {
                id: image.id,
                title: image.title,
                url: image.images?.downsized_medium.url
            }
        });

        return gifImages;
    }
