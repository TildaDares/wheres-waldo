class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.text :name
      t.text :time
      t.references :picture, null: false, foreign_key: true

      t.timestamps
    end
  end
end
