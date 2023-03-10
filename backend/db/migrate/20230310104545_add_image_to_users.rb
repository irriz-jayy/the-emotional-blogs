class AddImageToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :image_URL, :string
    add_column :users, :image_role, :string
    add_column :users, :image_href, :string
  end
end
