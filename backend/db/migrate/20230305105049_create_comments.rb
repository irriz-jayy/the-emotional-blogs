class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.text :comment, null: false
      t.references :user, foreign_key: true, null: false
      t.references :blog, foreign_key: true, null: false
      t.timestamps
    end
  end
end
