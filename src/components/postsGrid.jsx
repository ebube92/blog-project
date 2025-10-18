import BlogCard from "./blogCard"

export default function PostsGrid({ posts}) {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-16 bg-gray-50 w-full md:w-[80%] mx-auto">
            {posts.length > 0 ? (posts.map((post) => (
                <BlogCard
                    key={post.id}
                    title={post.title}
                    description={post.description}
                    image={post.image}
                    category={post.category}
                    date={post.date}
                />
            ))) : ( <p className="text-center text-gray-600 col-span-full">No posts available in this category.</p>
            )}
        </div>
    )
}