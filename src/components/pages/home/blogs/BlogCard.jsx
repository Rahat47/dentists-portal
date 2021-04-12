import React from "react";
const BlogCard = ({ blog }) => {
    return (
        <div className="col-md-4">
            <div className="card p-3">
                <div className="d-flex p-4 align-items-center mb-4">
                    <img src={blog.image} className="img-fluid w-25" alt="" />
                    <h4 className="text-uppercase ps-3">{blog.author}</h4>
                </div>
                <div>
                    <h4 className="py-3">{blog.title}</h4>
                    <p className="lead text-muted">{blog.message}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
