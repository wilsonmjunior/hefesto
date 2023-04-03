export function Pagination() {
  return (
    <nav aria-label="Page navigation" className="pagination-nav">
      <ul className="pagination-content">
        <li>
          <button className="pagination-previous">
            <svg 
              className="w-4 h-4 fill-current" 
              viewBox="0 0 20 20"
            >
              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" fill-rule="evenodd"></path>
            </svg>
          </button>
        </li>
        <li>
          <button className="pagination-item">
            1
          </button>
        </li>
        <li>
          <button className="pagination-item">
            2
          </button>
        </li>
        <li>
          <button className="pagination-item-selected">
            3
          </button>
        </li>
        <li>
          <button className="pagination-next">
            <svg 
              className="w-4 h-4 fill-current" 
              viewBox="0 0 20 20"
            >
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill-rule="evenodd"></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  )
}
