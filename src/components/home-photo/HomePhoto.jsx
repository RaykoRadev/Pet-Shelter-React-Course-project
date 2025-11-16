import { useState } from "react";
import "./HomePhotos.css";
import { Link } from "react-router-dom";

export default function HomePhotos({ photos }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const moveToSelected = (direction) => {
        if (direction === "next") {
            setSelectedIndex((prevIndex) => (prevIndex + 1) % photos.length);
        } else if (direction === "prev") {
            setSelectedIndex((prevIndex) =>
                prevIndex === 0 ? photos.length - 1 : prevIndex - 1
            );
        }
    };

    const getClassName = (index) => {
        const count = photos.length;
        const relative = (index - selectedIndex + count) % count;

        // 1 IMAGE → only center
        if (count === 1) {
            return "selected";
        }

        // 2 IMAGES → selected + next
        if (count === 2) {
            if (relative === 0) return "selected";
            if (relative === 1) return "next";
            return "hide";
        }

        // 3 IMAGES → prev, selected, next
        if (count === 3) {
            if (relative === 0) return "selected";
            if (relative === 1) return "next";
            if (relative === 2) return "prev";
            return "hide";
        }

        // 4 IMAGES → prevLeftSecond removed; 4 usable slots
        if (count === 4) {
            if (relative === 0) return "selected";
            if (relative === 1) return "next";
            if (relative === 2) return "prev";
            if (relative === 3) return "prevLeftSecond"; // optional
            return "hide";
        }

        // 5+ IMAGES → original full perspective
        if (relative === 0) return "selected";
        if (relative === 1) return "next";
        if (relative === 2) return "nextRightSecond";
        if (relative === count - 1) return "prev";
        if (relative === count - 2) return "prevLeftSecond";

        return relative > 2 ? "hideRight" : "hideLeft";
    };

    return (
        <div id="carousel-area">
            <div id="carousel">
                {photos.map(({ imageUrl, _id }, index) => (
                    <div className={getClassName(index)} key={_id}>
                        <div className="img-wrap">
                            <Link to={`/pets/details/${_id}`}>
                                <span className="img-text"></span>
                                <img src={imageUrl} alt={imageUrl} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="buttons">
                <button
                    className="icon-btn"
                    onClick={() => moveToSelected("prev")}
                >
                    <img src="/arrow-L.png" alt="prev" className="icon-img" />
                </button>

                <button
                    className="icon-btn"
                    onClick={() => moveToSelected("next")}
                >
                    <img
                        src="https://i.postimg.cc/k6kndBHg/arrow-R.png"
                        alt="next"
                        className="icon-img"
                    />
                </button>
            </div>
        </div>
    );
}
