class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title
      t.text :content

      t.datetime :created_at, precision: 0, null: false
      t.datetime :updated_at, precision: 0, null: false
      end
  end
end
