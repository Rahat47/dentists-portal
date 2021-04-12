import React from "react";
import BlogCard from "./BlogCard";
import person1 from "../../../../images/person1.png";
import person2 from "../../../../images/person2.png";
import person3 from "../../../../images/person3.png";
const Blog = () => {
    const blogs = [
        {
            id: 1,
            author: "Dr. Rahat",
            image: person1,
            message:
                "It is a long established fact that by the readable content of a lot layout. The point",
            title: "Check at least a doctor in a year for your teeth",
        },
        {
            id: 2,
            author: "Dr. Caudi",
            image: person2,
            message:
                "It is a long established fact that by the readable content of a lot layout. The point",
            title: "2 times of brush in a day can Keep you healthy",
        },
        {
            id: 3,
            author: "Dr. John Mitchel",
            image: person3,
            message:
                "It is a long established fact that by the readable content of a lot layout. The point",
            title: "The tooth cancer is taking a challenge",
        },
    ];
    return (
        <section>
            <div className="container">
                <div className="row">
                    {blogs.map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
