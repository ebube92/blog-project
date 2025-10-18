export default function BlogCard() {
    <div className="bg-white p-5 rounded-lg shadow-md mb-6 font-family">
        <img src={image} alt={title} className="rounded-lg object-cover" />

        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{category} . {date}</span>
            <a href="#">Read More</a>
        </div>
    </div>
}