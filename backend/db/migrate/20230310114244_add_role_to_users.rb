class AddRoleToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :user_role, :string
    add_column :users, :user_href, :string
  end
end
