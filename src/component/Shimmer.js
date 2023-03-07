const Shimmer = () => {
    return <div className="restaurant-list">
        {Array(10).fill("").map((e, index) =><div key = {index} className="shimmer-card" />)}
    </div>
}

export default Shimmer;