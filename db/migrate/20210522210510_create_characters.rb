class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :x_coord
      t.integer :y_coord
      t.references :picture_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
