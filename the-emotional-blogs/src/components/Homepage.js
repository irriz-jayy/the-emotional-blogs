import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Homepage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/blogs")
      .then((response) => response.json())
      .then((blogs) => setBlogs(blogs));
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your blog
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={blog.datetime} className="text-gray-500">
                    {blog.date}
                  </time>
                  <a
                    href={blog.category_href}
                    className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {blog.category_title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={blog.blog_href}>
                      <span className="absolute inset-0" />
                      {blog.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                    {blog.content}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={blog.image_url}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={blog.user_href}>
                        <span className="absolute inset-0" />
                        {blog.username}
                      </a>
                    </p>
                    <p className="text-gray-600">{blog.user_role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
