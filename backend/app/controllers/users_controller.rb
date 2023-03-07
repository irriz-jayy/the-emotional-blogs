class UsersController<Sinatra::Base

    get "/users" do
        users=User.all
        users.to_json
    end

    get "/users/:id" do
        User=User.find(params[:id])
        User.to_json
    end

    post "/users" do
        User=User.create(
            :name => params[:name]
        )
        User.to_json
    end

    delete "/users/:id" do
        User=User.find(params[:id])
        User.destroy
        User.to_json
    end

    patch "/users/:id" do
        User=User.find(params[:id])
        User.update(
            name: params[:name]
        )
        User.to_json
    end
end