class BlogsController< Sinatra::Base


    get "/blogs" do
        blogs=Blog.all
        blogs.to_json
    end
    
    get "/blogs/:id" do
        blog=Blog.find(params[:id])
        blog.to_json
    end
    
    delete "/blogs/:id" do
        blog=Blog.find(params[:id])
        blog.destroy
        blog.to_json
    end
    
    post "/blogs" do
        # get all existing authors
        users = User.all
        
        # randomly select an author
        user= user.sample
        
        # create the new blog post with the selected author
        blog = Blog.create(
          title: params[:title],
          content: params[:content],
          user_id: user.id
        )
        
        blog.to_json
    end  
    
    patch "/blogs/:id" do
        blog=Blog.find(params[:id])
        blog.update(
          title: params[:title],
          content: params[:content]
        )
        blog.to_json
    end
    
end