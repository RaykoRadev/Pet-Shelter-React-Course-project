import { useEffect, useState } from "react";
import { getHomePhotos } from "../../services/petServices";
import HomePhotos from "./home-photo/HomePhoto";
import Spinner from "../spinner/Spinner";

export default function Home() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        const getPhotos = async () => {
            const data = await getHomePhotos();
            console.log(data);

            setPhotos(data);
            setLoading(false);
        };
        getPhotos();

        return () => {
            abortController.abort();
        };
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 sm:py-12 md:px-12 md:py-24">
            <div className="flex flex-col lg:flex-row">
                <div
                    className="w-full lg:w-1/3 py-1 px-5 prose"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={100}
                >
                    <h1 className="text-7xl font-semibold text-gray-700 leading-tight">
                        Lets help them to find therir home
                    </h1>

                    <p className="text-2xl text-gray-600 font-light mt-8 leading-relaxed">
                        Nullam tincidunt felis eget blandit aliquam. Nunc vel
                        mollis lorem. Phasellus pharetra commodo ultricies.
                        Mauris scelerisque elit sed arcu consectetur hendrerit
                        et sit amet ligula.
                    </p>
                </div>
                <div className="w-full lg:w-2/3 py-1 px-10 grid relative">
                    {/* {photos.map((photo) => (
                        <HomePhotos imageUrl={photo.imageUrl} key={photo._id} />
                    ))} */}

                    {photos && <HomePhotos photos={photos} />}
                </div>
            </div>
        </div>
    );
}
