let blogs = [];

module.exports = {
    getBlogs: () => blogs,

    addBlog: (blog) => {
        blogs.push(blog);
    },

    deleteBlog: (index) => {
        blogs.splice(index, 1);
    },

    updateBlog: (index, blog) => {
        blogs[index] = blog;
    },

    getBlog: (index) => {
        return blogs[index];
    }
};