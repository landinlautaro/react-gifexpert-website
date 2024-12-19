import { useEffect, useState } from "react";
import {getGifts} from '../helpers/getGifts';

export const useFetchGift = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const getImages = async () => {
        const newImages = await getGifts(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages(category);
    }, []);

    return {
        images: images,
        isLoading: isLoading
    }

}
