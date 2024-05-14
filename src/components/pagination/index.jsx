import './pagination.css';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageClick = (event) => {
        onPageChange(Number(event.target.textContent));
    };

    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <nav aria-label="Pagination">
            <ul className="pagination">
                {/* Anterior */}
                <li className={`page-item ${currentPage === 1? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>&laquo;</button>
                </li>

                {/* Navegación de números de página */}
                {pages.map((page) => (
                    <li key={page} className={`page-item ${currentPage === page? 'active' : ''}`}>
                        <button className="page-link" onClick={handlePageClick}>{page}</button>
                    </li>
                ))}

                {/* Siguiente */}
                <li className={`page-item ${currentPage === totalPages? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>&raquo;</button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
