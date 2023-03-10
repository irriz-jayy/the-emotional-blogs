class AddTimeToBlogs < ActiveRecord::Migration[6.1]
  def change
    add_column :blogs, :date, :string
    add_column :blogs, :datetime, :string
    add_column :blogs, :category_title, :string
    add_column :blogs, :category_href, :string
    add_column :blogs, :blog_href, :string
  end
end
