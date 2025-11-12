export default function HomePhotos({ imageUrl }) {
    return (
        <div className="h-64 col-span-4 sm:col-span-2 relative">
            <img className="rounded-lg" src={imageUrl} alt="red veggies" />
        </div>
    );
}
