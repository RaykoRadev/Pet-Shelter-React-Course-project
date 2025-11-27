import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Pagination({ totalPages, curentPage, onChange }) {
    const [currentPage, setCurrentPage] = useState(curentPage);
    const [pages, setPages] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const generatePages = () => {
            const pageNumbers = [];
            const maxVisiblePages = window.innerWidth < 640 ? 3 : 5;
            const halfVisible = Math.floor(maxVisiblePages / 2);

            let start = currentPage - halfVisible;
            let end = currentPage + halfVisible;

            if (start < 1) {
                start = 1;
                end = Math.min(maxVisiblePages, totalPages);
            }

            if (end > totalPages) {
                end = totalPages;
                start = Math.max(1, totalPages - maxVisiblePages + 1);
            }

            for (let i = start; i <= end; i++) {
                pageNumbers.push(i);
            }

            setPages(pageNumbers);
        };

        generatePages();
        window.addEventListener("resize", generatePages);

        return () => window.removeEventListener("resize", generatePages);
    }, [currentPage, totalPages]);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages || page === currentPage) return;

        setIsAnimating(true);
        setCurrentPage(page);
        onChange(page);

        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };
    return (
        <nav
            className="mt-17 sm:mt-22 md:mt-38 lg:mt-54 flex items-center justify-center p-4"
            role="navigation"
            aria-label="Pagination Navigation"
        >
            <div className="flex items-center space-x-2 rounded-lg bg-green-100 p-2 shadow-lg transition-all duration-300 hover:shadow-xl">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex h-10 w-10 items-center justify-center rounded-md transition-all duration-300 ${
                        currentPage === 1
                            ? "cursor-not-allowed opacity-50"
                            : "hover:bg-green-200 active:scale-95"
                    }`}
                    aria-label="Previous page"
                >
                    <FaAngleLeft className="h-5 w-5 text-green-600" />
                </button>

                <div className="flex space-x-1">
                    {pages.map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`relative flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-all duration-300 ${
                                isAnimating ? "scale-95" : "scale-100"
                            } ${
                                page === currentPage
                                    ? "bg-green-700 text-white shadow-md"
                                    : "text-gray-600 hover:bg-green-200 active:scale-95"
                            }`}
                            aria-label={`Page ${page}`}
                            aria-current={
                                page === currentPage ? "page" : undefined
                            }
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex h-10 w-10 items-center justify-center rounded-md transition-all duration-300 ${
                        currentPage === totalPages
                            ? "cursor-not-allowed opacity-50"
                            : "hover:bg-green-200 active:scale-95"
                    }`}
                    aria-label="Next page"
                >
                    <FaAngleRight className="h-5 w-5 text-green-600" />
                </button>
            </div>
        </nav>
    );
}
