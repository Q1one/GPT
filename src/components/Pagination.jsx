import "./Pagination.scss"

function Pagination({totalPost, postPerPage, setCurrentPage}) {

    let pages = []

    for (let i=1; i<= Math.ceil(totalPost/postPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className="Pagination">
            {
                pages.map( (page, index) => {
                    return <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>
                } )
            }
        </div>
    )
}

export default Pagination