class CommentsController<Sinatra::Base

    get "/comments" do
        comments=Comment.all
        comments.to_json
    end

    
end