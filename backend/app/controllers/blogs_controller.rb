class BlogsController< Sinatra::Base

   


    # get "/blogs" do
    #     blogs=Blog.all
    #     blogs.to_json
    # end

    get '/blogs' do
        @blogs = Blog.joins(:user).select("blogs.*, users.username AS username, users.image_URL AS image_url, users.user_role AS user_role, users.user_href AS user_href")
        @blogs.to_json
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
        # find the user by username
        user = User.find_by(username: params[:username])
      
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