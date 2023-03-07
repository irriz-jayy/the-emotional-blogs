require_relative 'blogs_controller.rb'
require_relative 'users_controller.rb'
require_relative 'comments_controller.rb'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    {message: "Hello"}.to_json
  end    

  use BlogsController
  use UsersController
  use CommentsController
end


