class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.text :name
      t.integer :x_coord
      t.integer :y_coord
      t.references :picture, null: false, foreign_key: true

      t.timestamps
    end
  end
end
